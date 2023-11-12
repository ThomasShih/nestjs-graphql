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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("@nestjs/class-validator");
let ProductInput = class ProductInput {
};
exports.ProductInput = ProductInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "The name of the product" }),
    __metadata("design:type", String)
], ProductInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { description: "The price of the product, max two decimal places." }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    __metadata("design:type", Number)
], ProductInput.prototype, "price", void 0);
exports.ProductInput = ProductInput = __decorate([
    (0, graphql_1.InputType)()
], ProductInput);
//# sourceMappingURL=create-product.input.js.map