import mongoose, { Document } from 'mongoose';
export declare type ProductDocument = Product & Document;
export declare class Product {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, any>, {}, {}, {}, {}, "type", Product>;
