"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_coupon_dto_1 = require("./create-coupon.dto");
class UpdateCouponDTO extends (0, swagger_1.PartialType)(create_coupon_dto_1.CreateCouponDTO) {
}
exports.UpdateCouponDTO = UpdateCouponDTO;
//# sourceMappingURL=update-coupon.dto.js.map