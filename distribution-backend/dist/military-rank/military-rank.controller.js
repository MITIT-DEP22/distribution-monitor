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
exports.MilitaryRankController = void 0;
const common_1 = require("@nestjs/common");
const military_rank_service_1 = require("./military-rank.service");
const create_military_rank_dto_1 = require("./dto/create-military-rank.dto");
const update_military_rank_dto_1 = require("./dto/update-military-rank.dto");
const swagger_1 = require("@nestjs/swagger");
const role_auth_decorator_1 = require("../auth/role-auth.decorator");
const user_roles_enum_1 = require("../auth/user-roles.enum");
const roles_guard_1 = require("../auth/roles.guard");
let MilitaryRankController = class MilitaryRankController {
    constructor(militaryRankService) {
        this.militaryRankService = militaryRankService;
    }
    create(createMilitaryRankDto) {
        return this.militaryRankService.create(createMilitaryRankDto);
    }
    findAll() {
        return this.militaryRankService.findAll();
    }
    findOne(id) {
        return this.militaryRankService.findOne(+id);
    }
    update(id, updateMilitaryRankDto) {
        return this.militaryRankService.update(+id, updateMilitaryRankDto);
    }
    remove(id) {
        return this.militaryRankService.remove(+id);
    }
};
exports.MilitaryRankController = MilitaryRankController;
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_military_rank_dto_1.CreateMilitaryRankDto]),
    __metadata("design:returntype", void 0)
], MilitaryRankController.prototype, "create", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MilitaryRankController.prototype, "findAll", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MilitaryRankController.prototype, "findOne", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_military_rank_dto_1.UpdateMilitaryRankDto]),
    __metadata("design:returntype", void 0)
], MilitaryRankController.prototype, "update", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MilitaryRankController.prototype, "remove", null);
exports.MilitaryRankController = MilitaryRankController = __decorate([
    (0, swagger_1.ApiTags)('Військове звання'),
    (0, common_1.Controller)('v1/military-ranks'),
    __metadata("design:paramtypes", [military_rank_service_1.MilitaryRankService])
], MilitaryRankController);
//# sourceMappingURL=military-rank.controller.js.map