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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const role_auth_decorator_1 = require("../auth/role-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const swagger_1 = require("@nestjs/swagger");
const user_roles_enum_1 = require("../auth/user-roles.enum");
const user_entity_1 = require("./entities/user.entity");
let UserController = class UserController {
    constructor() { }
    currentUser(user) {
        return user;
    }
};
exports.UserController = UserController;
__decorate([
    (0, role_auth_decorator_1.Roles)(user_roles_enum_1.UserRole.USER),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('currentUser'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "currentUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Користувачи'),
    (0, common_1.Controller)('v1/users'),
    __metadata("design:paramtypes", [])
], UserController);
//# sourceMappingURL=user.controller.js.map