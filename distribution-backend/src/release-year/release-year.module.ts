import { forwardRef, Module } from '@nestjs/common';
import { ReleaseYearService } from './release-year.service';
import { ReleaseYearController } from './release-year.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReleaseYear } from './entities/release-year.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ReleaseYearController],
  providers: [ReleaseYearService],
  imports: [
    TypeOrmModule.forFeature([ReleaseYear]),
    forwardRef(() => AuthModule),
  ],
})
export class ReleaseYearModule {}
