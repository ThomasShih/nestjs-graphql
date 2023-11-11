import { Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserInput } from './dto/create-user.input';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver((of) => User)
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query((type) => [User])
    async getUsers() {
        return this.userService.getAll();
    }

    @Mutation((returns) => User)
    @UsePipes(new ValidationPipe())
    createUser(
        @Args('userInput') userInput: UserInput,
    ): Promise<User> {
        return this.userService.createUser(userInput);
    }

    @Mutation((returns) => User)
    @UsePipes(new ValidationPipe())
    addProductToOrder(
        @Args('user_id') user_id: string,
        @Args('product_id') product_id: string,
    ): Promise<User> {
        return this.userService.addProductToOrder(user_id, product_id);
    }
}
