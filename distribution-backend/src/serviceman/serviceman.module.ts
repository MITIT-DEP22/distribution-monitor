import { forwardRef, Module } from '@nestjs/common';
import { ServicemanService } from './serviceman.service';
import { ServicemanController } from './serviceman.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Serviceman } from './entities/serviceman.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ServicemanController],
  providers: [ServicemanService],
  imports: [
    TypeOrmModule.forFeature([Serviceman]),
    forwardRef(() => AuthModule),
  ],
})
export class ServicemanModule {}
