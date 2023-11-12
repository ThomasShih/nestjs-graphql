import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInput } from './dto/create-user.input';
import { Product } from '../product/product.entity';
export declare class UserService {
    private UserRepository;
    private ProductRepository;
    constructor(UserRepository: Repository<User>, ProductRepository: Repository<Product>);
    getAll(): Promise<User[]>;
    createUser(userInput: UserInput): Promise<User>;
    addProductToOrder(userId: string, productId: string): Promise<User>;
}
