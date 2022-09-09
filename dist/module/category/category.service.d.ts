import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category, CategoryDocument } from './schema/category.schema';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    createCategory(categoryDto: CreateCategoryDto, banner: any): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    findOneBySlug(slug: string): Promise<Category>;
    updateOne(id: string, file: any, categoryDto: CreateCategoryDto): Promise<any>;
    deleteOne(id: string): Promise<any>;
}
