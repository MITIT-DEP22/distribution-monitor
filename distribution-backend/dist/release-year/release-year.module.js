"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseYearModule = void 0;
const common_1 = require("@nestjs/common");
const release_year_service_1 = require("./release-year.service");
const release_year_controller_1 = require("./release-year.controller");
const typeorm_1 = require("@nestjs/typeorm");
const release_year_entity_1 = require("./entities/release-year.entity");
const auth_module_1 = require("../auth/auth.module");
let ReleaseYearModule = class ReleaseYearModule {
};
exports.ReleaseYearModule = ReleaseYearModule;
exports.ReleaseYearModule = ReleaseYearModule = __decorate([
    (0, common_1.Module)({
        controllers: [release_year_controller_1.ReleaseYearController],
        providers: [release_year_service_1.ReleaseYearService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([release_year_entity_1.ReleaseYear]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
    })
], ReleaseYearModule);
//# sourceMappingURL=release-year.module.js.map