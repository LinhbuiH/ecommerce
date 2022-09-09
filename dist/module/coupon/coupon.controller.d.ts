import { CouponService } from './coupon.service';
import { CreateCouponDTO } from './dto/create-coupon.dto';
import { UpdateCouponDTO } from './dto/update-coupon.dto';
export declare class CouponController {
    private readonly couponService;
    constructor(couponService: CouponService);
    create(createCouponDto: CreateCouponDTO): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCouponDto: UpdateCouponDTO): string;
    remove(id: string): string;
}
