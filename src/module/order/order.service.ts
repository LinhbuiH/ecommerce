import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemDTO } from './dto/item.dto';
import { Order, OrderDocument } from './schema/order.schema';


@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private readonly OrderModel: Model<OrderDocument>) { }

  async createOrder(userId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Order> {
    const newOrder = await this.OrderModel.create({
      userId,
      items: [{ ...itemDTO, subTotalPrice }],
      totalPrice
    });
    return newOrder;
  }

  async getOrder(userId: string): Promise<OrderDocument> {
    const Order = await this.OrderModel.findOne({ userId });
    return Order;
  }

  async deleteOrder(userId: string): Promise<Order> {
    const deletedOrder = await this.OrderModel.findOneAndRemove({ userId });
    return deletedOrder;
  }

  private recalculateOrder(Order: OrderDocument) {
    Order.totalPrice = 0;
    Order.items.forEach(item => {
      Order.totalPrice += (item.quantity * item.price);
    })
  }

  async addItemToOrder(userId: string, itemDTO: ItemDTO): Promise<Order> {
    const { productId, quantity, price } = itemDTO;
    const subTotalPrice = quantity * price;

    const Order = await this.getOrder(userId);

    if (Order) {
      const itemIndex = Order.items.findIndex((item) => item.productId == productId);

      if (itemIndex > -1) {
        let item = Order.items[itemIndex];
        item.quantity = Number(item.quantity) + Number(quantity);
        item.subTotalPrice = item.quantity * item.price;

        Order.items[itemIndex] = item;
        this.recalculateOrder(Order);
        return Order.save();
      } else {
        Order.items.push({ ...itemDTO, subTotalPrice });
        this.recalculateOrder(Order);
        return Order.save();
      }
    } else {
      const newOrder = await this.createOrder(userId, itemDTO, subTotalPrice, price);
      return newOrder;
    }
  }

  async removeItemFromOrder(userId: string, productId: string): Promise<any> {
    const Order = await this.getOrder(userId);

    const itemIndex = Order.items.findIndex((item) => item.productId == productId);

    if (itemIndex > -1) {
      Order.items.splice(itemIndex, 1);
      return Order.save();
    }
  }
}