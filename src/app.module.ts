import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './module/product/product.module';
import { CategoryModule } from './module/category/category.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './module/order/order.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'), 
  MailerModule.forRoot({
    transport: {
      host: 'smtp.sendgrid.net',
      auth: {
        user: 'apikey',
        pass: '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',
      },
    },
    template: {
      dir: join(__dirname, 'mails'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
  
  ProductModule, 
  CategoryModule, 
  UserModule, 
  AuthModule, 
  OrderModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
