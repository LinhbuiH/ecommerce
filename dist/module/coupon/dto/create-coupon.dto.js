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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDTO = exports.ArrayIdDTO = exports.CreateCouponDTO = exports.CouponType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var CouponType;
(function (CouponType) {
    CouponType["Product"] = "Product";
    CouponType["User"] = "User";
    CouponType["Payment"] = "Payment";
})(CouponType = exports.CouponType || (exports.CouponType = {}));
class CreateCouponDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'FRDANA',
        description: 'Coupon Name',
        format: 'string'
    }),
    __metadata("design:type", String)
], CreateCouponDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Coupon Value (in percent %)',
        format: 'number',
        minimum: 1,
        maximum: 100,
        required: true
    }),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateCouponDTO.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 30000,
        description: 'maximum coupons can be used. In Rp.',
        format: 'number',
        required: true
    }),
    __metadata("design:type", Number)
], CreateCouponDTO.prototype, "max_discount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '2022-09-09T04:12:54.173Z',
        description: 'Start Date Coupon Active',
        format: 'date'
    }),
    __metadata("design:type", String)
], CreateCouponDTO.prototype, "start_date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '2022-09-09T04:12:54.173Z',
        description: 'End Date Coupon Active',
        format: 'date'
    }),
    __metadata("design:type", String)
], CreateCouponDTO.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '5f96930b970708276038afe4 ref from payment method',
        description: 'Payment Method',
        format: 'string'
    }),
    __metadata("design:type", String)
], CreateCouponDTO.prototype, "payment_method", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(CouponType, { message: 'Type value is: Product, User, Event, Payment' }),
    (0, swagger_1.ApiProperty)({
        example: 'Product',
        description: 'Coupon type, available in [Product, User, Event]',
        format: 'string',
        enum: ['Product', 'User', 'Event', 'Payment'],
        default: 'Product'
    }),
    __metadata("design:type", String)
], CreateCouponDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'xxxxxxx ref from product_id',
        description: 'Product Id',
        format: 'string'
    }),
    __metadata("design:type", String)
], CreateCouponDTO.prototype, "product_id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        example: ['spotlight', 'spontant'],
        description: 'tags',
        format: 'string in array'
    }),
    __metadata("design:type", Array)
], CreateCouponDTO.prototype, "tag", void 0);
exports.CreateCouponDTO = CreateCouponDTO;
class ArrayIdDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        example: ['5f699e87b92fbe5320a35a93', '5f699e8bb92fbe5320a35a94'],
        description: 'Id',
        format: 'array'
    }),
    __metadata("design:type", Array)
], ArrayIdDTO.prototype, "id", void 0);
exports.ArrayIdDTO = ArrayIdDTO;
class SearchDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: "FRDANA",
        description: 'Search By Name',
        format: 'string'
    }),
    __metadata("design:type", String)
], SearchDTO.prototype, "search", void 0);
exports.SearchDTO = SearchDTO;
//# sourceMappingURL=create-coupon.dto.js.map