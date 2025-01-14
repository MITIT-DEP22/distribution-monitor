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
exports.DistributionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const distribution_entity_1 = require("./entities/distribution.entity");
const typeorm_2 = require("typeorm");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const military_base_entity_1 = require("../military-base/entities/military-base.entity");
let DistributionService = class DistributionService {
    constructor(distributionRepository, militaryBaseRepository) {
        this.distributionRepository = distributionRepository;
        this.militaryBaseRepository = militaryBaseRepository;
    }
    getDistributionCount() {
        return this.distributionRepository.count();
    }
    paginationFind(options, searchBy, searchedId) {
        const where = {};
        if (searchBy === 'region') {
            where.militaryBase = {
                region: {
                    id: searchedId,
                },
            };
        }
        else if (searchBy === 'position') {
            where.position = {
                id: searchedId,
            };
        }
        else if (searchBy === 'military-base') {
            where.militaryBase = {
                id: searchedId,
            };
        }
        else if (searchBy === 'year') {
            where.releaseYear = {
                id: searchedId,
            };
        }
        console.log(where);
        return (0, nestjs_typeorm_paginate_1.paginate)(this.distributionRepository, options, {
            where: where,
            relations: {
                serviceman: true,
                position: true,
                releaseYear: true,
                militaryBase: {
                    region: true,
                },
            },
        });
    }
    findAll() {
        return this.distributionRepository.find({
            relations: {
                serviceman: true,
                position: true,
                releaseYear: true,
                militaryBase: {
                    region: true,
                },
            },
        });
    }
    create(createDistributionDto) {
        return this.distributionRepository.save(createDistributionDto);
    }
    async findOne(id) {
        try {
            return await this.distributionRepository.findOneOrFail({
                where: { id: id },
                relations: {
                    serviceman: true,
                    position: true,
                    releaseYear: true,
                    militaryBase: true,
                },
            });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Distribution with id ${id} not found`);
        }
    }
    update(id, updateDistributionDto) {
        return this.distributionRepository.update(id, updateDistributionDto);
    }
    remove(id) {
        return this.distributionRepository.delete(id);
    }
};
exports.DistributionService = DistributionService;
exports.DistributionService = DistributionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(distribution_entity_1.Distribution)),
    __param(1, (0, typeorm_1.InjectRepository)(military_base_entity_1.MilitaryBase)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], DistributionService);
//# sourceMappingURL=distribution.service.js.map