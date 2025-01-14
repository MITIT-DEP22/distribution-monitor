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
exports.CreateMilitaryBaseDto = void 0;
const region_entity_1 = require("../../region/entities/region.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMilitaryBaseDto {
}
exports.CreateMilitaryBaseDto = CreateMilitaryBaseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: "Ім'я має бути рядком." }),
    (0, class_validator_1.Length)(2, 20, {
        message: 'Назва військової бази має бути довжиною від 5 до 100 символів',
    }),
    __metadata("design:type", String)
], CreateMilitaryBaseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Регіон має бути числовим індетифікатором.' }),
    __metadata("design:type", region_entity_1.Region)
], CreateMilitaryBaseDto.prototype, "region", void 0);
//# sourceMappingURL=create-military-base.dto.js.map