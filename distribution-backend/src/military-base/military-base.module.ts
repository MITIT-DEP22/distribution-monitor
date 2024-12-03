import { forwardRef, Module } from '@nestjs/common';
import { MilitaryBaseService } from './military-base.service';
import { MilitaryBaseController } from './military-base.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MilitaryBase } from './entities/military-base.entity';
import { Distribution } from '../distribution/entities/distribution.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [MilitaryBaseController],
  providers: [MilitaryBaseService],
  imports: [
    TypeOrmModule.forFeature([MilitaryBase, Distribution]),
    forwardRef(() => AuthModule),
  ],
})
export class MilitaryBaseModule {}
