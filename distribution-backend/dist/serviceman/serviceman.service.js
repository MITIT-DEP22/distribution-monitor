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
exports.ServicemanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const serviceman_entity_1 = require("./entities/serviceman.entity");
const typeorm_2 = require("typeorm");
let ServicemanService = class ServicemanService {
    constructor(serviceManRepository) {
        this.serviceManRepository = serviceManRepository;
    }
    async create(createServicemanDto) {
        try {
            return await this.serviceManRepository.save(createServicemanDto);
        }
        catch (error) {
            if (error.code === 'ER_NO_REFERENCED_ROW_2')
                throw new common_1.BadRequestException('RankId не валідний.');
            else
                throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        return this.serviceManRepository.find({});
    }
    async findOne(id) {
        try {
            return await this.serviceManRepository.findOneOrFail({
                where: { id: id },
            });
        }
        catch (error) {
            if (error.code === 'ER_BAD_FIELD_ERROR')
                throw new common_1.BadRequestException('Id для пошуку не валідний.');
            else
                throw new common_1.NotFoundException(`serviceman з id ${id} не знайдений`);
        }
    }
    async update(id, updateServicemanDto) {
        try {
            return await this.serviceManRepository.update(id, updateServicemanDto);
        }
        catch (error) {
            if (error.code === 'ER_BAD_FIELD_ERROR')
                throw new common_1.BadRequestException('Id для оновлення не валідний.');
            else if (error.code === 'ER_NO_REFERENCED_ROW_2')
                throw new common_1.BadRequestException('Id для військового звання не валідний.');
            else
                throw new common_1.BadRequestException(error.message);
        }
    }
    async remove(id) {
        try {
            return await this.serviceManRepository.delete(id);
        }
        catch (error) {
            if (error.code === 'ER_BAD_FIELD_ERROR')
                throw new common_1.BadRequestException('Id для видалення не валідний.');
            else
                throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.ServicemanService = ServicemanService;
exports.ServicemanService = ServicemanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(serviceman_entity_1.Serviceman)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ServicemanService);
//# sourceMappingURL=serviceman.service.js.map