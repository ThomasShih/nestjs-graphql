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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
const product_entity_1 = require("../product/product.entity");
let UserService = class UserService {
    constructor(UserRepository, ProductRepository) {
        this.UserRepository = UserRepository;
        this.ProductRepository = ProductRepository;
    }
    async getAll() {
        return await this.UserRepository.find({
            relations: ["order"]
        });
    }
    async createUser(userInput) {
        const products = await Promise.all(userInput.order.map((product_id) => {
            const product = this.ProductRepository.findOne({
                where: { id: product_id }
            });
            return product;
        }));
        if (products.includes(null)) {
            throw new Error("One or more products were not found");
        }
        const user = new user_entity_1.User();
        user.id = (0, uuid_1.v4)();
        user.name = userInput.name;
        user.email = userInput.email;
        user.age = userInput.age;
        user.order = products;
        return this.UserRepository.save(user);
    }
    async addProductToOrder(userId, productId) {
        const user = await this.UserRepository.findOne({
            relations: ["order"],
            where: { id: userId },
        });
        if (!user) {
            throw new Error(`User with id ${userId} not found`);
        }
        if (user.order.find((product) => product.id === productId)) {
            return user;
        }
        const product = await this.ProductRepository.findOne({
            where: { id: productId }
        });
        user.order.push(product);
        return this.UserRepository.save(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map