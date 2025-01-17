"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionModule = void 0;
const common_1 = require("@nestjs/common");
const distribution_service_1 = require("./distribution.service");
const distribution_controller_1 = require("./distribution.controller");
const typeorm_1 = require("@nestjs/typeorm");
const distribution_entity_1 = require("./entities/distribution.entity");
const military_base_entity_1 = require("../military-base/entities/military-base.entity");
const auth_module_1 = require("../auth/auth.module");
let DistributionModule = class DistributionModule {
};
exports.DistributionModule = DistributionModule;
exports.DistributionModule = DistributionModule = __decorate([
    (0, common_1.Module)({
        controllers: [distribution_controller_1.DistributionController],
        providers: [distribution_service_1.DistributionService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([distribution_entity_1.Distribution, military_base_entity_1.MilitaryBase]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
    })
], DistributionModule);
//# sourceMappingURL=distribution.module.js.map