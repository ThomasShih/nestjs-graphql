import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: "The Product model repersents a unique product for order, with a specified price." })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String, { description: "The unique uuid of the product" })
    id: string;

    @Column()
    @Field(() => String, { description: "The name of the product" })
    name: string;

    @Column({ type: "decimal", scale: 2, default: 0 })
    @Field(() => Number, { description: "The price of the product, max two decimal places." })
    price: number;
}