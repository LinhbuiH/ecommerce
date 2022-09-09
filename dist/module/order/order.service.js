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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrderService = class OrderService {
    constructor(OrderModel) {
        this.OrderModel = OrderModel;
    }
    async createOrder(userId, itemDTO, subTotalPrice, totalPrice) {
        const newOrder = await this.OrderModel.create({
            userId,
            items: [Object.assign(Object.assign({}, itemDTO), { subTotalPrice })],
            totalPrice
        });
        return newOrder;
    }
    async getOrder(userId) {
        const Order = await this.OrderModel.findOne({ userId });
        return Order;
    }
    async deleteOrder(userId) {
        const deletedOrder = await this.OrderModel.findOneAndRemove({ userId });
        return deletedOrder;
    }
    recalculateOrder(Order) {
        Order.totalPrice = 0;
        Order.items.forEach(item => {
            Order.totalPrice += (item.quantity * item.price);
        });
    }
    async addItemToOrder(userId, itemDTO) {
        const { productId, quantity, price } = itemDTO;
        const subTotalPrice = quantity * price;
        const Order = await this.getOrder(userId);
        if (Order) {
            const itemIndex = Order.items.findIndex((item) => item.productId == productId);
            if (itemIndex > -1) {
                let item = Order.items[itemIndex];
                item.quantity = Number(item.quantity) + Number(quantity);
                item.subTotalPrice = item.quantity * item.price;
                Order.items[itemIndex] = item;
                this.recalculateOrder(Order);
                return Order.save();
            }
            else {
                Order.items.push(Object.assign(Object.assign({}, itemDTO), { subTotalPrice }));
                this.recalculateOrder(Order);
                return Order.save();
            }
        }
        else {
            const newOrder = await this.createOrder(userId, itemDTO, subTotalPrice, price);
            return newOrder;
        }
    }
    async removeItemFromOrder(userId, productId) {
        const Order = await this.getOrder(userId);
        const itemIndex = Order.items.findIndex((item) => item.productId == productId);
        if (itemIndex > -1) {
            Order.items.splice(itemIndex, 1);
            return Order.save();
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Order')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map