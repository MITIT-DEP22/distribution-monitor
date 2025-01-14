import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {RoleModule} from './role/role.module';
import {DatabaseConfig} from './database.config';
import {MilitaryBaseModule} from './military-base/military-base.module';
import {MilitaryRankModule} from './military-rank/military-rank.module';
import {ServicemanModule} from './serviceman/serviceman.module';
import {PositionModule} from './position/position.module';
import {ReleaseYearModule} from './release-year/release-year.module';
import {RegionModule} from './region/region.module';
import {DistributionModule} from './distribution/distribution.module';
import {SpecialtyModule} from "./specialty/specialty.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        DatabaseConfig,
        UserModule,
        AuthModule,
        RoleModule,
        MilitaryBaseModule,
        MilitaryRankModule,
        ServicemanModule,
        PositionModule,
        ReleaseYearModule,
        RegionModule,
        DistributionModule,
        SpecialtyModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
