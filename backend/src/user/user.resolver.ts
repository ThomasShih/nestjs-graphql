import { Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserInput } from './dto/create-user.input';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver((of) => User)
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query((type) => [User], {
        description: 'Get all users'
    })
    async getUsers() {
        return this.userService.getAll();
    }

    @Mutation((returns) => User, {
        description: 'Create new user'
    })
    @UsePipes(new ValidationPipe())
    createUser(
        @Args('userInput') userInput: UserInput,
    ): Promise<User> {
        return this.userService.createUser(userInput);
    }

    @Mutation((returns) => User, {
        description: 'Add product to the order of an existing user'
    })
    @UsePipes(new ValidationPipe())
    addProductToOrder(
        @Args('userId') userId: string,
        @Args('productId') productId: string,
    ): Promise<User> {
        return this.userService.addProductToOrder(userId, productId);
    }
}
