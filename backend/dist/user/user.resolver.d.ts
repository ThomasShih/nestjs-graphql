import { User } from './user.entity';
import { UserService } from './user.service';
import { UserInput } from './dto/create-user.input';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    createUser(userInput: UserInput): Promise<User>;
    addProductToOrder(userId: string, productId: string): Promise<User>;
}
