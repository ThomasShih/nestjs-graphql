import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsPositive } from '@nestjs/class-validator';

@InputType()
export class ProductInput {
    @Field()
    name: string;

    @Field()
    @IsPositive()
    @IsNumber({ maxDecimalPlaces: 2 })
    price: number;
}