import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './dto/create-user.input';
import { v4 as uuidv4 } from 'uuid';
import { Product } from 'src/product/product.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) { }

    async getAll(): Promise<User[]> {
        return await this.UserRepository.find();
    }

    async createUser(userInput: UserInput): Promise<User> {
        const newUser = this.UserRepository.create({
            // Generate a new uuid
            id: uuidv4(),
            name: userInput.name,
            email: userInput.email,
            age: userInput.age,
            order: userInput.order,
        });

        return this.UserRepository.save(newUser);
    }
}
