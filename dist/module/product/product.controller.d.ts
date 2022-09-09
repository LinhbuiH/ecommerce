import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDTO } from './dto/filter-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProducts(filterProductDTO: FilterProductDTO): Promise<import("./schema/product.schema").Product[]>;
    getProduct(id: string): Promise<import("./schema/product.schema").Product>;
    addProduct(createProductDTO: CreateProductDto): Promise<import("./schema/product.schema").Product>;
    updateProduct(id: string, createProductDTO: CreateProductDto): Promise<import("./schema/product.schema").Product>;
    deleteProduct(id: string): Promise<any>;
}
