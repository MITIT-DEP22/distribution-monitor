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
exports.CreateServicemanDto = void 0;
const military_rank_entity_1 = require("../../military-rank/entities/military-rank.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateServicemanDto {
}
exports.CreateServicemanDto = CreateServicemanDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: "Ім'я має бути рядком." }),
    (0, class_validator_1.Length)(5, 100, {
        message: "Повне ім'я має бути довжиною від 5 до 100 символів",
    }),
    __metadata("design:type", String)
], CreateServicemanDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Військове звання має бути числовим індетифікатором.' }),
    __metadata("design:type", military_rank_entity_1.MilitaryRank)
], CreateServicemanDto.prototype, "rank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'День народження має бути числом.' }),
    (0, class_validator_1.Min)(1900, { message: 'Рік народження має бути не менше 1900.' }),
    (0, class_validator_1.Max)(new Date().getFullYear(), {
        message: 'Нажаль ви не могли народитися в майбутньому.',
    }),
    __metadata("design:type", Number)
], CreateServicemanDto.prototype, "birthYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'Стать має бути рядком.' }),
    (0, class_validator_1.Length)(1, 1, { message: 'Стать має бути довжиною 1-го символу' }),
    __metadata("design:type", String)
], CreateServicemanDto.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'Спецільність не має бути пустою.' }),
    (0, class_validator_1.Length)(3, 3, { message: 'Спецільність має бути довжиною 3-ох символу' }),
    __metadata("design:type", String)
], CreateServicemanDto.prototype, "specialty", void 0);
//# sourceMappingURL=create-serviceman.dto.js.map