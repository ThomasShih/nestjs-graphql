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
exports.UserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("@nestjs/class-validator");
let UserInput = class UserInput {
};
exports.UserInput = UserInput;
__decorate([
    (0, graphql_1.Field)(() => String, { description: "The name of the user" }),
    __metadata("design:type", String)
], UserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: "The email of the user" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: "The age of the user" }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 0 }),
    __metadata("design:type", Number)
], UserInput.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(type => [String], { description: "The list of products the user has ordered" }),
    __metadata("design:type", Array)
], UserInput.prototype, "order", void 0);
exports.UserInput = UserInput = __decorate([
    (0, graphql_1.InputType)()
], UserInput);
//# sourceMappingURL=create-user.input.js.map