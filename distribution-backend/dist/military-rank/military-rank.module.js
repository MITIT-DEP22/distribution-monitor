"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilitaryRankModule = void 0;
const common_1 = require("@nestjs/common");
const military_rank_service_1 = require("./military-rank.service");
const military_rank_controller_1 = require("./military-rank.controller");
const typeorm_1 = require("@nestjs/typeorm");
const military_rank_entity_1 = require("./entities/military-rank.entity");
const auth_module_1 = require("../auth/auth.module");
let MilitaryRankModule = class MilitaryRankModule {
};
exports.MilitaryRankModule = MilitaryRankModule;
exports.MilitaryRankModule = MilitaryRankModule = __decorate([
    (0, common_1.Module)({
        controllers: [military_rank_controller_1.MilitaryRankController],
        providers: [military_rank_service_1.MilitaryRankService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([military_rank_entity_1.MilitaryRank]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
    })
], MilitaryRankModule);
//# sourceMappingURL=military-rank.module.js.map