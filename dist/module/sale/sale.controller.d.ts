import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleController {
    private readonly saleService;
    constructor(saleService: SaleService);
    create(createSaleDto: CreateSaleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSaleDto: UpdateSaleDto): string;
    remove(id: string): string;
}
