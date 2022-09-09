import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { join } from 'path';

@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}

  @Get('plain-text-email')
  async plainTextEmail(@Query('toemail') toEmail) {
  var response = await this.mailService.sendMail({
   to:toEmail,
   from:"builinh.hd23@gmail.com",
   subject: 'Xac thu email',
   text: 'Welcome shop', 
  });
  return response;
  }

  @Post('html-email')
  async postHTMLEmail(@Body() superHero: any) {
  var response = await this.mailService.sendMail({
    to: 'builinh.hd23@gmail.com',
    from: 'hailinh.hd23@gmail.com',
    subject: 'sale',
    template: 'xtql',
    context: {
	   superHero:superHero
    },
  });
  return 'success';
  }
  
  @Get('file-attachment')
  async fileAttachement(@Query('toemail') toemail){
    var response = await this.mailService.sendMail({
      to: toemail,
      from: 'hailinh.hd23@gmail.com',
      subject: 'File Attachment',
      html: "<h1>File Attachment</h1>",
      attachments:[{
        path:  join(__dirname,'email','bike-1.webp'),
        filename:'1.webp',
        contentDisposition:"attachment"
      }]
    });
    return 'success';
  }

}