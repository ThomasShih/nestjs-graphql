import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductInput } from './dto/create-product.input';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    getAll(): Promise<Product[]>;
    createProduct(productInput: ProductInput): Promise<Product>;
}
