"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilitaryBaseModule = void 0;
const common_1 = require("@nestjs/common");
const military_base_service_1 = require("./military-base.service");
const military_base_controller_1 = require("./military-base.controller");
const typeorm_1 = require("@nestjs/typeorm");
const military_base_entity_1 = require("./entities/military-base.entity");
const distribution_entity_1 = require("../distribution/entities/distribution.entity");
const auth_module_1 = require("../auth/auth.module");
let MilitaryBaseModule = class MilitaryBaseModule {
};
exports.MilitaryBaseModule = MilitaryBaseModule;
exports.MilitaryBaseModule = MilitaryBaseModule = __decorate([
    (0, common_1.Module)({
        controllers: [military_base_controller_1.MilitaryBaseController],
        providers: [military_base_service_1.MilitaryBaseService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([military_base_entity_1.MilitaryBase, distribution_entity_1.Distribution]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
    })
], MilitaryBaseModule);
//# sourceMappingURL=military-base.module.js.map