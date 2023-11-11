import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String, { description: "The unique uuid of the user" })
    id: string;

    @Column()
    @Field(() => String, { description: "The name of the user" })
    name: string;

    @Column()
    @Field(() => String, { description: "The email of the user" })
    email: string;

    @Column("int")
    @Field(() => Number, { description: "The age of the user" })
    age: number;

    @Field((type) => [Product], { defaultValue: [], description: "The list of products the user has ordered" })
    @ManyToMany((type) => Product, product => product.id)
    @JoinTable()
    order: Product[];
}