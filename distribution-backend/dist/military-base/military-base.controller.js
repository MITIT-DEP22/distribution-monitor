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
exports.MilitaryBaseController = void 0;
const common_1 = require("@nestjs/common");
const military_base_service_1 = require("./military-base.service");
const create_military_base_dto_1 = require("./dto/create-military-base.dto");
const update_military_base_dto_1 = require("./dto/update-military-base.dto");
const swagger_1 = require("@nestjs/swagger");
const role_auth_decorator_1 = require("../auth/role-auth.decorator");
const user_roles_enum_1 = require("../auth/user-roles.enum");
const roles_guard_1 = require("../auth/roles.guard");
let MilitaryBaseController = class MilitaryBaseController {
    constructor(militaryBaseService) {
        this.militaryBaseService = militaryBaseService;
    }
    create(createMilitaryBaseDto) {
        return this.militaryBaseService.create(createMilitaryBaseDto);
    }
    findAll() {
        return this.militaryBaseService.findAll();
    }
    findOne(id) {
        return this.militaryBaseService.findOne(+id);
    }
    update(id, updateMilitaryBaseDto) {
        return this.militaryBaseService.update(+id, updateMilitaryBaseDto);
    }
    remove(id) {
        return this.militaryBaseService.remove(+id);
    }
};
exports.MilitaryBaseController = MilitaryBaseController;
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_military_base_dto_1.CreateMilitaryBaseDto]),
    __metadata("design:returntype", void 0)
], MilitaryBaseController.prototype, "create", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MilitaryBaseController.prototype, "findAll", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MilitaryBaseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_military_base_dto_1.UpdateMilitaryBaseDto]),
    __metadata("design:returntype", void 0)
], MilitaryBaseController.prototype, "update", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MilitaryBaseController.prototype, "remove", null);
exports.MilitaryBaseController = MilitaryBaseController = __decorate([
    (0, swagger_1.ApiTags)('Військова частина'),
    (0, common_1.Controller)('v1/military-bases'),
    __metadata("design:paramtypes", [military_base_service_1.MilitaryBaseService])
], MilitaryBaseController);
//# sourceMappingURL=military-base.controller.js.map