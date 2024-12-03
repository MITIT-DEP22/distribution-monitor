import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { Role } from './role/entities/role.entity';
import { Serviceman } from './serviceman/entities/serviceman.entity';
import { MilitaryRank } from './military-rank/entities/military-rank.entity';
import { MilitaryBase } from './military-base/entities/military-base.entity';
import { Distribution } from './distribution/entities/distribution.entity';
import { Position } from './position/entities/position.entity';
import { Region } from './region/entities/region.entity';
import { ReleaseYear } from './release-year/entities/release-year.entity';

export const DatabaseConfig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    database: configService.get<string>('MYSQL_DB'),
    host: configService.get<string>('MYSQL_HOST'),
    password: configService.get<string>('MYSQL_PASSWORD'),
    port: Number(configService.get<number>('MYSQL_PORT')),
    username: configService.get<string>('MYSQL_USER'),
    entities: [
      User,
      Role,
      Serviceman,
      MilitaryRank,
      MilitaryBase,
      Position,
      Region,
      ReleaseYear,
      Distribution,
    ],
  }),
  inject: [ConfigService],
});
