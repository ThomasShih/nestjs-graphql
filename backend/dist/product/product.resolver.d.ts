import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ProductInput } from './dto/create-product.input';
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    getProducts(): Promise<Product[]>;
    createProduct(productInput: ProductInput): Promise<Product>;
}
