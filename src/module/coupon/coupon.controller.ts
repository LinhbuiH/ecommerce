import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpStatus, Req, Put, Query, DefaultValuePipe, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Order } from '../order/schema/order.schema';
import { CouponService } from './coupon.service';
import { ArrayIdDTO, CreateCouponDTO } from './dto/create-coupon.dto';
import { UpdateCouponDTO } from './dto/update-coupon.dto';

const inRole = ["USER", "ADMIN"];

@ApiTags("Coupons")
@UseGuards(RolesGuard)
@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}
  
	@Post('admin/coupon')
    @UseGuards(JWTandRolesGuard)
    @Roles(Role.Admin)
    async createNewCoupon(@Body() couponInfo: CreateCouponDTO) {
        return this.couponService.createCoupon(couponInfo);
    }

    @Patch('admin/coupon/:couponId')
    @UseGuards(JWTandRolesGuard)
    @Roles(Role.Admin)
    async updateCouponInfo(@Param('couponId') couponId: string, @Body() param: UpdateCouponDTO) {
        return this.couponService.updateCouponInfo(couponId, param);
    }

    @Get('user/coupon/:couponId')
    async getCoupon(@Param('couponId') couponId: string) {
        return this.couponService.getCouponById(couponId);
    }

    @Get('user/coupon/all')
    async getListCoupon() {
        return this.couponService.getListCoupon();
    }

    @Delete('admin/coupon/:couponId')
    async inactiveCoupon(@Param('couponId') couponId: string) {
        return this.couponService.inactiveCoupon(couponId);
    }
}

