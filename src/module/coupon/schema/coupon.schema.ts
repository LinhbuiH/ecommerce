import { SchemaFactory,Schema, Prop  } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { expiring} from "../../../util/order.util";

export type CouponDocument = Document & Coupon;


@Schema()
export class Coupon {
    @Prop({type: String, required: true, unique: true})
    name: string;

    @Prop({type: String, required: true, unique: true})
    code: string;

    @Prop({type: Number, required: true})
    value: number;

    @Prop({type: Date,default: new Date()
    },)
    start_date: Date;

    @Prop({type: Date,required: true,default: expiring(14)},)
    end_date: Date;

    @Prop({type: Number, required: true})
    max_discount: number;

    @Prop({type: mongoose.Schema.Types.ObjectId,ref: 'PaymentMethod',default: null},)
    payment_method: string;

    @Prop({type: mongoose.Schema.Types.ObjectId,ref: 'Product',default: null},)
    product_id: string;

    tag: [{type: mongoose.Schema.Types.ObjectId,ref: 'Tag'}]

}

export const CouponSchema = SchemaFactory.createForClass(Coupon);


// create index search
CouponSchema.index({ name: 'text', code: 'text', value: 'text', payment_method: 'text', type: 'text' });

CouponSchema.pre('find', function() {
    this.populate({
        path: 'payment_method',
        select: {_id:1, name:1, info:1, vendor:1, isActive:1}
    })
    .populate({
        path: 'product_id',
        select: {_id:1, name:1, slug:1, code:1, type:1, visibility:1}
    })
    .populate({
        path: 'tag',
        select: {_id:1, name:1}
    })
    .sort({ created_at: -1 })
});

CouponSchema.pre('findOne', function() {
    this.populate({
        path: 'payment_method',
        select: {_id:1, name:1, info:1, vendor:1, isActive:1}
    })
    .populate({
        path: 'product_id',
        select: {_id:1, name:1, slug:1, code:1, type:1, visibility:1}
    })
    .populate({
        path: 'tag',
        select: {_id:1, name:1}
    })
});

