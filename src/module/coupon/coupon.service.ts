import { Injectable } from '@nestjs/common';
import { CreateCouponDTO } from './dto/create-coupon.dto';
import { UpdateCouponDTO } from './dto/update-coupon.dto';

@Injectable()
export class CouponService {
  create(createCouponDto: CreateCouponDTO) {
    return 'This action adds a new coupon';
  }

  findAll() {
    return `This action returns all coupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coupon`;
  }

  update(id: number, updateCouponDto: UpdateCouponDTO) {
    return `This action updates a #${id} coupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }
}
