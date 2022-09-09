import { CreateCouponDTO } from './dto/create-coupon.dto';
import { UpdateCouponDTO } from './dto/update-coupon.dto';
export declare class CouponService {
    create(createCouponDto: CreateCouponDTO): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCouponDto: UpdateCouponDTO): string;
    remove(id: number): string;
}
