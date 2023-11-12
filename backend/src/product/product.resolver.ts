import { Resolver } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductInput } from './dto/create-product.input';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { BadRequestException, UsePipes, ValidationError, ValidationPipe } from '@nestjs/common';

@Resolver((of) => Product)
export class ProductResolver {
    constructor(private productService: ProductService) { }

    @Query((type) => [Product], {
        description: 'Get all products',
    })
    async getProducts() {
        return this.productService.getAll();
    }

    @Mutation((returns) => Product, {
        description: 'Create new product',
    })
    @UsePipes(new ValidationPipe())
    createProduct(@Args('productInput') productInput: ProductInput): Promise<Product> {
        return this.productService.createProduct(productInput);
    }
}
