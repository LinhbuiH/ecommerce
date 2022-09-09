import { OrderService } from './order.service';
import { ItemDTO } from './dto/item.dto';
export declare class OrderController {
    private OrderService;
    constructor(OrderService: OrderService);
    addItemToOrder(req: any, itemDTO: ItemDTO): Promise<import("./schema/order.schema").Order>;
    removeItemFromOrder(req: any, { productId }: {
        productId: any;
    }): Promise<any>;
    deleteOrder(userId: string): Promise<import("./schema/order.schema").Order>;
}
