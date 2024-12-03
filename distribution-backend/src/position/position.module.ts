import { forwardRef, Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Distribution } from '../distribution/entities/distribution.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [PositionController],
  providers: [PositionService],
  imports: [
    TypeOrmModule.forFeature([Position, Distribution]),
    forwardRef(() => AuthModule),
  ],
})
export class PositionModule {}
