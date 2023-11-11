import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from 'src/product/product.entity';

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    email: string;

    @Column("int")
    @Field()
    age: number;

    @Field((type) => [Product], { defaultValue: [] })
    @ManyToMany((type) => Product, product => product.id)
    @JoinTable()
    order: Product[];
}