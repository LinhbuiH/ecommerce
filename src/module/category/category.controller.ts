import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Bind, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import path from 'path';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schema/category.schema';
import { diskStorage} from 'multer';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post('/')
    @UseInterceptors(FileInterceptor ('file', {
        storage: diskStorage({
            destination: 'src/assets/category/banner',
            filename(req, file, callback) {
                const fileName = path.parse(file.originalname).name.replace('/\s/g', '') + Date.now();
                const extension = path.parse(file.originalname).ext;
                callback(null, `${fileName}${extension}`)
            },
        })
    }))
    @Bind(UploadedFile())
    async createCategory( file: any, @Body() categoryDto: CreateCategoryDto) {
        const linkFile = file.path;
        return await this.categoryService.createCategory(categoryDto, linkFile);
    }

    @Get('/')
    async findAllCategory(): Promise<Category[]> {
        return await this.categoryService.findAll();
    }

    @Get('/:id')
    async findOneCategory(@Param('id') id: string) {
        return await this.categoryService.findOne(id);
    }

    @Get('findBySlug/:slug')
    async findBySlug(@Param('slug') slug: string) {
        return await this.categoryService.findOneBySlug(slug);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor ('file', {
        storage: diskStorage({
            destination: 'src/assets/category/banner',
            filename(req, file, callback) {
                const fileName = path.parse(file.originalname).name.replace('/\s/g', '') + Date.now();
                const extension = path.parse(file.originalname).ext;
                callback(null, `${fileName}${extension}`)
            },
        })
    }))
    @Bind(UploadedFile())
    async updateCategory(file: any, @Param('id') id: string, categoryDto: CreateCategoryDto) {
        console.log(file)
        const linkFile = file.path;
        return await this.categoryService.updateOne(id, linkFile, categoryDto);
    }

    @Delete('/:id')
    async deletedCategory(@Param('id') id: string) {
        return await this.categoryService.deleteOne(id);
    }
    
}