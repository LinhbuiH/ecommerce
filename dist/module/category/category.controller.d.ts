import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './schema/category.schema';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(file: any, categoryDto: CreateCategoryDto): Promise<Category>;
    findAllCategory(): Promise<Category[]>;
    findOneCategory(id: string): Promise<Category>;
    findBySlug(slug: string): Promise<Category>;
    updateCategory(file: any, id: string, categoryDto: CreateCategoryDto): Promise<any>;
    deletedCategory(id: string): Promise<any>;
}
