import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './module/product/product.module';
import { CategoryModule } from './module/category/category.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './module/order/order.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'), 
  ProductModule, 
  CategoryModule, 
  UserModule, 
  AuthModule, 
  OrderModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
