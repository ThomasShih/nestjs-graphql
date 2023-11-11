import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsPositive } from '@nestjs/class-validator';
import { Product } from 'src/product/product.entity';

@InputType()
export class UserInput {
    @Field(() => String, { description: "The name of the user" })
    name: string;

    @Field(() => String, { description: "The email of the user" })
    @IsEmail()
    email: string;

    @Field(() => Number, { description: "The age of the user" })
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 0 })
    age: number;

    @Field(type => [String], { description: "The list of products the user has ordered" })
    order: string[];
}