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
exports.Serviceman = void 0;
const typeorm_1 = require("typeorm");
const military_rank_entity_1 = require("../../military-rank/entities/military-rank.entity");
const swagger_1 = require("@nestjs/swagger");
let Serviceman = class Serviceman {
};
exports.Serviceman = Serviceman;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Serviceman.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Serviceman.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToOne)(() => military_rank_entity_1.MilitaryRank),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", military_rank_entity_1.MilitaryRank)
], Serviceman.prototype, "rank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Serviceman.prototype, "birthYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Serviceman.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Serviceman.prototype, "specialty", void 0);
exports.Serviceman = Serviceman = __decorate([
    (0, typeorm_1.Entity)('service_man')
], Serviceman);
//# sourceMappingURL=serviceman.entity.js.map