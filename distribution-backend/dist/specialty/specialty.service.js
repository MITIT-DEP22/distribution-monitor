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
exports.SpecialtyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const specialty_entity_1 = require("./entities/specialty.entity");
let SpecialtyService = class SpecialtyService {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    async createSpecialty(dto) {
        const candidate = await this.specialtyRepository.findOne({ where: { specialtyNumber: dto.specialtyNumber } });
        if (candidate) {
            throw new common_1.HttpException(`Specialty with number ${dto.specialtyNumber} already exist`, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.specialtyRepository.save(dto);
    }
    async getSpecialtyByNumber(specialtyNumber) {
        try {
            return this.specialtyRepository.findOneOrFail({
                where: { specialtyNumber: specialtyNumber },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Specialty with number ${specialtyNumber} not found`);
        }
    }
};
exports.SpecialtyService = SpecialtyService;
exports.SpecialtyService = SpecialtyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(specialty_entity_1.Specialty)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SpecialtyService);
//# sourceMappingURL=specialty.service.js.map