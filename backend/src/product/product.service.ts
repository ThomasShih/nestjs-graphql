import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInput } from './dto/create-product.input';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    async getAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async createProduct(productInput: ProductInput): Promise<Product> {
        // Generate a new uuid
        const newProduct = this.productRepository.create({
            ...productInput,
            id: uuidv4(),
        });


        return this.productRepository.save(newProduct);
    }
}
