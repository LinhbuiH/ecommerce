import mongoose from "mongoose";
export declare const CouponSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name: string;
    value: number;
    max_discount: number;
    start_date: Date;
    end_date: Date;
    payment_method: mongoose.Types.ObjectId;
    product_id: mongoose.Types.ObjectId;
    tag: {
        type?: mongoose.Types.ObjectId;
        ref?: unknown;
    }[];
    code: string;
    type?: string;
}>;
