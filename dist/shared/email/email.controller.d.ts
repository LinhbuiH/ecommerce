import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailController {
    private mailService;
    constructor(mailService: MailerService);
    plainTextEmail(toEmail: any): Promise<SentMessageInfo>;
    postHTMLEmail(superHero: any): Promise<string>;
    fileAttachement(toemail: any): Promise<string>;
}
