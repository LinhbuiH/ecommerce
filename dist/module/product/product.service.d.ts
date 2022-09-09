import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { FilterProductDTO } from './dto/filter-product.dto';
import { Product, ProductDocument } from './schema/product.schema';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    getFilteredProducts(filterProductDTO: FilterProductDTO): Promise<Product[]>;
    getAllProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    addProduct(createProductDTO: CreateProductDto): Promise<Product>;
    updateProduct(id: string, createProductDTO: CreateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<any>;
}
