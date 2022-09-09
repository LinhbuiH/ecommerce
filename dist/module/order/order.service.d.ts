import { Model } from 'mongoose';
import { ItemDTO } from './dto/item.dto';
import { Order, OrderDocument } from './schema/order.schema';
export declare class OrderService {
    private readonly OrderModel;
    constructor(OrderModel: Model<OrderDocument>);
    createOrder(userId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Order>;
    getOrder(userId: string): Promise<OrderDocument>;
    deleteOrder(userId: string): Promise<Order>;
    private recalculateOrder;
    addItemToOrder(userId: string, itemDTO: ItemDTO): Promise<Order>;
    removeItemFromOrder(userId: string, productId: string): Promise<any>;
}
