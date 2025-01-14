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
exports.CreateDistributionDto = void 0;
const serviceman_entity_1 = require("../../serviceman/entities/serviceman.entity");
const position_entity_1 = require("../../position/entities/position.entity");
const release_year_entity_1 = require("../../release-year/entities/release-year.entity");
const military_base_entity_1 = require("../../military-base/entities/military-base.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDistributionDto {
}
exports.CreateDistributionDto = CreateDistributionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Військовослужбовець має бути числовим індетифікатором.' }),
    __metadata("design:type", serviceman_entity_1.Serviceman)
], CreateDistributionDto.prototype, "serviceMan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Посада має бути числовим індетифікатором.' }),
    __metadata("design:type", position_entity_1.Position)
], CreateDistributionDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Дата випуску має бути числовим індетифікатором.' }),
    __metadata("design:type", release_year_entity_1.ReleaseYear)
], CreateDistributionDto.prototype, "releaseYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Військова частина має бути числовим індетифікатором.' }),
    __metadata("design:type", military_base_entity_1.MilitaryBase)
], CreateDistributionDto.prototype, "militaryBase", void 0);
//# sourceMappingURL=create-distribution.dto.js.map