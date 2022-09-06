import { Controller, Request, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { OrderService } from './order.service';
import { ItemDTO } from './dto/item.dto';


@Controller('Order')
export class OrderController {
  constructor(private OrderService: OrderService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Post('/')
  async addItemToOrder(@Request() req, @Body() itemDTO: ItemDTO) {
    const userId = req.user.userId;
    const Order = await this.OrderService.addItemToOrder(userId, itemDTO);
    return Order;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Delete('/')
  async removeItemFromOrder(@Request() req, @Body() { productId }) {
    const userId = req.user.userId;
    const Order = await this.OrderService.removeItemFromOrder(userId, productId);
    if (!Order) throw new NotFoundException('Item does not exist');
    return Order;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Delete('/:id')
  async deleteOrder(@Param('id') userId: string) {
    const Order = await this.OrderService.deleteOrder(userId);
    if (!Order) throw new NotFoundException('Order does not exist');
    return Order;
  }
}