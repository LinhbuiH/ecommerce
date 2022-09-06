import { IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateProductDto {

    @IsNotEmpty()
    name: string;
    slug: string;
    description: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsMongoId() //used to check if input value is ObjectId type
    category: any;

}