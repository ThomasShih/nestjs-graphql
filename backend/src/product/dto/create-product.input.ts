import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsPositive } from '@nestjs/class-validator';

@InputType()
export class ProductInput {
    @Field(() => String, { description: "The name of the product" })
    name: string;

    @Field(() => Number, { description: "The price of the product, max two decimal places." })
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 2 })
    price: number;
}