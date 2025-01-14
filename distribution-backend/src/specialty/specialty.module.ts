import {forwardRef, Module} from '@nestjs/common';
import {SpecialtyService} from './specialty.service';
import {SpecialtyController} from './specialty.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule} from '../auth/auth.module';
import {Specialty} from "./entities/specialty.entity";

@Module({
    providers: [SpecialtyService],
    controllers: [SpecialtyController],
    imports: [
        TypeOrmModule.forFeature([Specialty]),
        forwardRef(() => AuthModule),
    ],
    exports: [SpecialtyService],
})
export class SpecialtyModule {
}
