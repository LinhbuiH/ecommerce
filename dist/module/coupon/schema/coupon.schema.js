"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponSchema = void 0;
const mongoose_1 = require("mongoose");
const order_util_1 = require("../../../util/order.util");
exports.CouponSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: Number,
        required: true,
    },
    start_date: {
        type: Date,
        default: new Date()
    },
    end_date: {
        type: Date,
        required: true,
        default: (0, order_util_1.expiring)(14)
    },
    max_discount: {
        type: Number,
        required: true,
    },
    payment_method: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'PaymentMethod',
        default: null
    },
    type: String,
    product_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Product',
        default: null
    },
    tag: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Tag'
        }]
}, {
    collection: 'coupons',
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: false },
});
exports.CouponSchema.index({ name: 'text', code: 'text', value: 'text', payment_method: 'text', type: 'text' });
exports.CouponSchema.pre('find', function () {
    this.populate({
        path: 'payment_method',
        select: { _id: 1, name: 1, info: 1, vendor: 1, isActive: 1 }
    })
        .populate({
        path: 'product_id',
        select: { _id: 1, name: 1, slug: 1, code: 1, type: 1, visibility: 1 }
    })
        .populate({
        path: 'tag',
        select: { _id: 1, name: 1 }
    })
        .sort({ created_at: -1 });
});
exports.CouponSchema.pre('findOne', function () {
    this.populate({
        path: 'payment_method',
        select: { _id: 1, name: 1, info: 1, vendor: 1, isActive: 1 }
    })
        .populate({
        path: 'product_id',
        select: { _id: 1, name: 1, slug: 1, code: 1, type: 1, visibility: 1 }
    })
        .populate({
        path: 'tag',
        select: { _id: 1, name: 1 }
    });
});
//# sourceMappingURL=coupon.schema.js.map