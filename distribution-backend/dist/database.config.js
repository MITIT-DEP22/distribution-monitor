"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./user/entities/user.entity");
const role_entity_1 = require("./role/entities/role.entity");
const serviceman_entity_1 = require("./serviceman/entities/serviceman.entity");
const military_rank_entity_1 = require("./military-rank/entities/military-rank.entity");
const military_base_entity_1 = require("./military-base/entities/military-base.entity");
const distribution_entity_1 = require("./distribution/entities/distribution.entity");
const position_entity_1 = require("./position/entities/position.entity");
const region_entity_1 = require("./region/entities/region.entity");
const release_year_entity_1 = require("./release-year/entities/release-year.entity");
const specialty_entity_1 = require("./specialty/entities/specialty.entity");
exports.DatabaseConfig = typeorm_1.TypeOrmModule.forRootAsync({
    imports: [config_1.ConfigModule],
    useFactory: (configService) => ({
        type: 'mysql',
        database: configService.get('MYSQL_DB'),
        host: configService.get('MYSQL_HOST'),
        password: configService.get('MYSQL_PASSWORD'),
        port: Number(configService.get('MYSQL_PORT')),
        username: configService.get('MYSQL_USER'),
        entities: [
            user_entity_1.User,
            role_entity_1.Role,
            serviceman_entity_1.Serviceman,
            military_rank_entity_1.MilitaryRank,
            military_base_entity_1.MilitaryBase,
            position_entity_1.Position,
            region_entity_1.Region,
            release_year_entity_1.ReleaseYear,
            distribution_entity_1.Distribution,
            specialty_entity_1.Specialty
        ],
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=database.config.js.map