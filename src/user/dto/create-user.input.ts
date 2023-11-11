import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsPositive } from '@nestjs/class-validator';
import { Product } from 'src/product/product.entity';

@InputType()
export class UserInput {
    @Field()
    name: string;

    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 0 })
    age: number;

    @Field(type => [String])
    order: string[];
}