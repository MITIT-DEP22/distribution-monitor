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
exports.MilitaryBase = void 0;
const typeorm_1 = require("typeorm");
const region_entity_1 = require("../../region/entities/region.entity");
const swagger_1 = require("@nestjs/swagger");
let MilitaryBase = class MilitaryBase {
};
exports.MilitaryBase = MilitaryBase;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MilitaryBase.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MilitaryBase.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToOne)(() => region_entity_1.Region),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", region_entity_1.Region)
], MilitaryBase.prototype, "region", void 0);
exports.MilitaryBase = MilitaryBase = __decorate([
    (0, typeorm_1.Entity)({
        name: 'military_bases',
    })
], MilitaryBase);
//# sourceMappingURL=military-base.entity.js.map