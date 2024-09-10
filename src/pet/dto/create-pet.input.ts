import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePetInput {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field(() => Int)
  owenerID: number;
}
