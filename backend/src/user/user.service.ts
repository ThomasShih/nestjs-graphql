import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './dto/create-user.input';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../product/product.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,

        @InjectRepository(Product)
        private ProductRepository: Repository<Product>,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.UserRepository.find(
            {
                relations: ["order"]
            }
        );
    }

    async createUser(userInput: UserInput): Promise<User> {
        const products = await Promise.all(userInput.order.map((product_id) => {
            const product = this.ProductRepository.findOne({
                where: { id: product_id }
            })
            return product;
        }));

        if (products.includes(null)) {
            throw new Error("One or more products were not found");
        }

        const user = new User();
        user.id = uuidv4();
        user.name = userInput.name;
        user.email = userInput.email;
        user.age = userInput.age;
        user.order = products;

        return this.UserRepository.save(user);
    }

    async addProductToOrder(userId: string, productId: string): Promise<User> {
        const user = await this.UserRepository.findOne({
            relations: ["order"],
            where: { id: userId },
        });

        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }

        // Quick check to see if the product is already in the order, if so, spare a db call
        if (user.order.find((product) => product.id === productId)) {
            return user;
        }

        const product = await this.ProductRepository.findOne({
            where: { id: productId }
        });

        user.order.push(product);

        return this.UserRepository.save(user);
    }
}
