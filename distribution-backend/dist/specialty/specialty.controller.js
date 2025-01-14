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
exports.SpecialtyController = void 0;
const common_1 = require("@nestjs/common");
const specialty_service_1 = require("./specialty.service");
const swagger_1 = require("@nestjs/swagger");
const role_auth_decorator_1 = require("../auth/role-auth.decorator");
const user_roles_enum_1 = require("../auth/user-roles.enum");
const roles_guard_1 = require("../auth/roles.guard");
const create_specialty_dto_1 = require("./dto/create-specialty.dto");
let SpecialtyController = class SpecialtyController {
    constructor(specialtyService) {
        this.specialtyService = specialtyService;
    }
    create(dto) {
        return this.specialtyService.createSpecialty(dto);
    }
    getByNumber(number) {
        return this.specialtyService.getSpecialtyByNumber(number);
    }
};
exports.SpecialtyController = SpecialtyController;
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_specialty_dto_1.CreateSpecialtyDto]),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "create", null);
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('/:number'),
    __param(0, (0, common_1.Param)('number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SpecialtyController.prototype, "getByNumber", null);
exports.SpecialtyController = SpecialtyController = __decorate([
    (0, swagger_1.ApiTags)('Спеіальності'),
    (0, common_1.Controller)('v1/specialties'),
    __metadata("design:paramtypes", [specialty_service_1.SpecialtyService])
], SpecialtyController);
//# sourceMappingURL=specialty.controller.js.map