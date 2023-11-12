"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_entity_1 = require("./product.entity");
const product_service_1 = require("./product.service");
const create_product_input_1 = require("./dto/create-product.input");
const graphql_2 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts() {
        return this.productService.getAll();
    }
    createProduct(productInput) {
        return this.productService.createProduct(productInput);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_2.Query)((type) => [product_entity_1.Product], {
        description: 'Get all products',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "getProducts", null);
__decorate([
    (0, graphql_2.Mutation)((returns) => product_entity_1.Product, {
        description: 'Create new product',
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, graphql_2.Args)('productInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_input_1.ProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)((of) => product_entity_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map