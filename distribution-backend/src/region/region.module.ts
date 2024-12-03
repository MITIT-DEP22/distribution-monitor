import { forwardRef, Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [RegionController],
  providers: [RegionService],
  imports: [TypeOrmModule.forFeature([Region]), forwardRef(() => AuthModule)],
})
export class RegionModule {}
