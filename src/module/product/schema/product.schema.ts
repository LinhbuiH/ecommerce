import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({type: Number, required: true})
  price: number;

  @Prop()
  image: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true})
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);