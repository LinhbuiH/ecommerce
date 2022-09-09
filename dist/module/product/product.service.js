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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getFilteredProducts(filterProductDTO) {
        const { category, search } = filterProductDTO;
        let products = await this.getAllProducts();
        if (search) {
            products = products.filter(product => product.name.includes(search) ||
                product.description.includes(search));
        }
        if (category) {
            products = products.filter(product => product.category === category);
        }
        return products;
    }
    async getAllProducts() {
        const products = await this.productModel.find().exec();
        return products;
    }
    async getProduct(id) {
        const product = await this.productModel.findById(id).exec();
        return product;
    }
    async addProduct(createProductDTO) {
        const newProduct = await this.productModel.create(createProductDTO);
        return newProduct.save();
    }
    async updateProduct(id, createProductDTO) {
        const updatedProduct = await this.productModel
            .findByIdAndUpdate(id, createProductDTO, { new: true });
        return updatedProduct;
    }
    async deleteProduct(id) {
        const deletedProduct = await this.productModel.findByIdAndRemove(id);
        return deletedProduct;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map