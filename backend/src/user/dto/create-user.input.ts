import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsPositive } from '@nestjs/class-validator';

@InputType()
export class UserInput {
    @Field(() => String, { description: "The name of the user" })
    name: string;

    @Field(() => String, { description: "The email of the user" })
    @IsEmail()
    email: string;

    @Field(() => Int, { description: "The age of the user" })
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 0 })
    age: number;

    @Field(type => [String], { description: "The list of products the user has ordered" })
    order: string[];
}