import { forwardRef, Module } from '@nestjs/common';
import { MilitaryRankService } from './military-rank.service';
import { MilitaryRankController } from './military-rank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MilitaryRank } from './entities/military-rank.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [MilitaryRankController],
  providers: [MilitaryRankService],
  imports: [
    TypeOrmModule.forFeature([MilitaryRank]),
    forwardRef(() => AuthModule),
  ],
})
export class MilitaryRankModule {}
