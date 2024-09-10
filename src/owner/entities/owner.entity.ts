import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Pet } from 'src/pet/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  age: number;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field(() => Pet)
  pets: [Pet];
}
