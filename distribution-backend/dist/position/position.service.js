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
exports.PositionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const position_entity_1 = require("./entities/position.entity");
const typeorm_2 = require("typeorm");
const distribution_entity_1 = require("../distribution/entities/distribution.entity");
let PositionService = class PositionService {
    constructor(positionRepository, distributionRepository) {
        this.positionRepository = positionRepository;
        this.distributionRepository = distributionRepository;
    }
    async topPositions(limit) {
        const servicemen = await this.distributionRepository.find({
            relations: {
                position: true,
            },
        });
        const positionFrequency = {};
        const positionEntities = [];
        servicemen.forEach((distribution) => {
            const position = distribution.position.position;
            positionFrequency[position] = (positionFrequency[position] || 0) + 1;
            positionEntities.push(distribution.position);
        });
        const sortedPositions = Object.keys(positionFrequency).sort((positionA, positionB) => positionFrequency[positionB] - positionFrequency[positionA]);
        return sortedPositions.slice(0, limit).map((position) => {
            return positionEntities.find((entity) => entity.position === position);
        });
    }
    create(createPositionDto) {
        return this.positionRepository.save(createPositionDto);
    }
    findAll() {
        return this.positionRepository.find({});
    }
    findOne(id) {
        try {
            return this.positionRepository.findOneOrFail({ where: { id: id } });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Position with id ${id} not found`);
        }
    }
    update(id, updatePositionDto) {
        return this.positionRepository.update(id, updatePositionDto);
    }
    remove(id) {
        return this.positionRepository.delete(id);
    }
};
exports.PositionService = PositionService;
exports.PositionService = PositionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(position_entity_1.Position)),
    __param(1, (0, typeorm_1.InjectRepository)(distribution_entity_1.Distribution)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PositionService);
//# sourceMappingURL=position.service.js.map