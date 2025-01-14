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
exports.MilitaryRankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const military_rank_entity_1 = require("./entities/military-rank.entity");
const typeorm_2 = require("typeorm");
let MilitaryRankService = class MilitaryRankService {
    constructor(militaryRankRepository) {
        this.militaryRankRepository = militaryRankRepository;
    }
    create(createMilitaryRankDto) {
        return this.militaryRankRepository.save(createMilitaryRankDto);
    }
    findAll() {
        return this.militaryRankRepository.find({});
    }
    findOne(id) {
        try {
            return this.militaryRankRepository.findOneOrFail({ where: { id: id } });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Military rank with id ${id} not found`);
        }
    }
    update(id, updateMilitaryRankDto) {
        return this.militaryRankRepository.update(id, updateMilitaryRankDto);
    }
    remove(id) {
        return this.militaryRankRepository.delete(id);
    }
};
exports.MilitaryRankService = MilitaryRankService;
exports.MilitaryRankService = MilitaryRankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(military_rank_entity_1.MilitaryRank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MilitaryRankService);
//# sourceMappingURL=military-rank.service.js.map