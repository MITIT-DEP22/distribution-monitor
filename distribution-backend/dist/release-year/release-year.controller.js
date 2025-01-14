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
exports.ReleaseYearController = void 0;
const common_1 = require("@nestjs/common");
const release_year_service_1 = require("./release-year.service");
const create_release_year_dto_1 = require("./dto/create-release-year.dto");
const update_release_year_dto_1 = require("./dto/update-release-year.dto");
const swagger_1 = require("@nestjs/swagger");
const role_auth_decorator_1 = require("../auth/role-auth.decorator");
const user_roles_enum_1 = require("../auth/user-roles.enum");
const roles_guard_1 = require("../auth/roles.guard");
let ReleaseYearController = class ReleaseYearController {
    constructor(releaseYearService) {
        this.releaseYearService = releaseYearService;
    }
    create(createReleaseYearDto) {
        return this.releaseYearService.create(createReleaseYearDto);
    }
    findAll() {
        return this.releaseYearService.findAll();
    }
    findOne(id) {
        return this.releaseYearService.findOne(+id);
    }
    update(id, updateReleaseYearDto) {
        return this.releaseYearService.update(+id, updateReleaseYearDto);
    }
    remove(id) {
        return this.releaseYearService.remove(+id);
    }
};
exports.ReleaseYearController = ReleaseYearController;
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_release_year_dto_1.CreateReleaseYearDto]),
    __metadata("design:returntype", void 0)
], ReleaseYearController.prototype, "create", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReleaseYearController.prototype, "findAll", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReleaseYearController.prototype, "findOne", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_release_year_dto_1.UpdateReleaseYearDto]),
    __metadata("design:returntype", void 0)
], ReleaseYearController.prototype, "update", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReleaseYearController.prototype, "remove", null);
exports.ReleaseYearController = ReleaseYearController = __decorate([
    (0, swagger_1.ApiTags)('Рік випуску'),
    (0, common_1.Controller)('v1/release-years'),
    __metadata("design:paramtypes", [release_year_service_1.ReleaseYearService])
], ReleaseYearController);
//# sourceMappingURL=release-year.controller.js.map