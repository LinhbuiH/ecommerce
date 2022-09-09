"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
let EmailController = class EmailController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async plainTextEmail(toEmail) {
        var response = await this.mailService.sendMail({
            to: toEmail,
            from: "builinh.hd23@gmail.com",
            subject: 'Xac thu email',
            text: 'Welcome shop',
        });
        return response;
    }
    async postHTMLEmail(superHero) {
        var response = await this.mailService.sendMail({
            to: 'builinh.hd23@gmail.com',
            from: 'hailinh.hd23@gmail.com',
            subject: 'sale',
            template: 'xtql',
            context: {
                superHero: superHero
            },
        });
        return 'success';
    }
    async fileAttachement(toemail) {
        var response = await this.mailService.sendMail({
            to: toemail,
            from: 'hailinh.hd23@gmail.com',
            subject: 'File Attachment',
            html: "<h1>File Attachment</h1>",
            attachments: [{
                    path: (0, path_1.join)(__dirname, 'email', 'bike-1.webp'),
                    filename: '1.webp',
                    contentDisposition: "attachment"
                }]
        });
        return 'success';
    }
};
__decorate([
    (0, common_1.Get)('plain-text-email'),
    __param(0, (0, common_1.Query)('toemail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "plainTextEmail", null);
__decorate([
    (0, common_1.Post)('html-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "postHTMLEmail", null);
__decorate([
    (0, common_1.Get)('file-attachment'),
    __param(0, (0, common_1.Query)('toemail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "fileAttachement", null);
EmailController = __decorate([
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailController);
exports.EmailController = EmailController;
//# sourceMappingURL=email.controller.js.map