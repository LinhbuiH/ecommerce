import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';

import { Category, CategoryDocument } from './schema/category.schema';
import * as fs from 'fs';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}

    async createCategory(categoryDto: CreateCategoryDto, banner: any): Promise<Category> {
        const newCategory = await (await this.categoryModel.create(categoryDto)).updateOne({banner: banner});
        return newCategory;      
    }

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
        
    }

    async findOne(id: string): Promise<Category> {
        return this.categoryModel.findById(id).exec();
 
    }

    async findOneBySlug(slug: string): Promise<Category> {
        return this.categoryModel.findOne({slug}).exec();

    }

    async updateOne(id: string, file: any, categoryDto: CreateCategoryDto): Promise<any> {
        const category = await this.categoryModel.findById(id).exec();
        const path = category.banner;
        console.log(path);
        if(path){
            fs.unlinkSync(path);
        }
        console.log(path)
        category.updateOne(categoryDto).exec();
        category.updateOne({banner: file}).exec();
        return category;
    }

    async deleteOne(id: string): Promise<any> {
        return this.categoryModel.findByIdAndDelete(id).exec();

    }

}