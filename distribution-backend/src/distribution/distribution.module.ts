import { forwardRef, Module } from '@nestjs/common';
import { DistributionService } from './distribution.service';
import { DistributionController } from './distribution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Distribution } from './entities/distribution.entity';
import { MilitaryBase } from '../military-base/entities/military-base.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [DistributionController],
  providers: [DistributionService],
  imports: [
    TypeOrmModule.forFeature([Distribution, MilitaryBase]),
    forwardRef(() => AuthModule),
  ],
})
export class DistributionModule {}
