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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("./schema/category.schema");
const fs = require("fs");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async createCategory(categoryDto, banner) {
        const newCategory = await (await this.categoryModel.create(categoryDto)).updateOne({ banner: banner });
        return newCategory;
    }
    async findAll() {
        const categories = await this.categoryModel.find().exec();
        return categories;
    }
    async findOne(id) {
        const category = await this.categoryModel.findById(id).exec();
        return category;
    }
    async findOneBySlug(slug) {
        const category = await this.categoryModel.findOne({ slug }).exec();
        return category;
    }
    async updateOne(id, file, categoryDto) {
        const category = await this.categoryModel.findById(id).exec();
        const path = category.banner;
        console.log(path);
        if (path) {
            fs.unlinkSync(path);
        }
        console.log(path);
        category.updateOne(categoryDto).exec();
        category.updateOne({ banner: file }).exec();
        return category;
    }
    async deleteOne(id) {
        const deletedCategory = await this.categoryModel.findByIdAndDelete(id).exec();
        return deletedCategory;
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map