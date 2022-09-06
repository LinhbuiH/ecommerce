import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './schema/category.schema';

@Module({imports: [
  MongooseModule.forFeatureAsync([ 
    {
      name: Category.name,
      useFactory: () => {
        const slug = require('mongoose-slug-generator')
        const schema = CategorySchema;
        schema.plugin(slug)
        return schema;
      },
    }
  ])
],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
