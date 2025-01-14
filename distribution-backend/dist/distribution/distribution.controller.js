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
exports.DistributionController = void 0;
const common_1 = require("@nestjs/common");
const distribution_service_1 = require("./distribution.service");
const create_distribution_dto_1 = require("./dto/create-distribution.dto");
const update_distribution_dto_1 = require("./dto/update-distribution.dto");
const swagger_1 = require("@nestjs/swagger");
const role_auth_decorator_1 = require("../auth/role-auth.decorator");
const user_roles_enum_1 = require("../auth/user-roles.enum");
const roles_guard_1 = require("../auth/roles.guard");
let DistributionController = class DistributionController {
    constructor(distributionService) {
        this.distributionService = distributionService;
    }
    paginationFind(page = 1, limit = 10, searchBy = '', searchedId = 0) {
        limit = limit > 100 ? 100 : limit;
        return this.distributionService.paginationFind({
            page,
            limit,
        }, searchBy, searchedId);
    }
    getCount() {
        return this.distributionService.getDistributionCount();
    }
    findAll() {
        return this.distributionService.findAll();
    }
    create(createDistributionDto) {
        return this.distributionService.create(createDistributionDto);
    }
    findOne(id) {
        return this.distributionService.findOne(+id);
    }
    update(id, updateDistributionDto) {
        return this.distributionService.update(+id, updateDistributionDto);
    }
    remove(id) {
        return this.distributionService.remove(+id);
    }
};
exports.DistributionController = DistributionController;
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('by', new common_1.DefaultValuePipe(''))),
    __param(3, (0, common_1.Query)('id', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number]),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "paginationFind", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "getCount", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "findAll", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_distribution_dto_1.CreateDistributionDto]),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "create", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "findOne", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_distribution_dto_1.UpdateDistributionDto]),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "update", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DistributionController.prototype, "remove", null);
exports.DistributionController = DistributionController = __decorate([
    (0, swagger_1.ApiTags)('Випуск'),
    (0, common_1.Controller)('v1/distributions'),
    __metadata("design:paramtypes", [distribution_service_1.DistributionService])
], DistributionController);
//# sourceMappingURL=distribution.controller.js.map