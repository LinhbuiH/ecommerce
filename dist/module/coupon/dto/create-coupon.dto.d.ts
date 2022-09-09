export declare enum CouponType {
    Product = "Product",
    User = "User",
    Payment = "Payment"
}
export declare class CreateCouponDTO {
    name: string;
    code: string;
    value: number;
    max_discount: number;
    start_date: string;
    end_date: string;
    payment_method: string;
    type: CouponType;
    product_id: string;
    tag: [string];
}
export declare class ArrayIdDTO {
    id: string[];
}
export declare class SearchDTO {
    search: string;
}
