import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {SpecialtyService} from './specialty.service';
import {ApiTags} from '@nestjs/swagger';
import {Roles} from '../auth/role-auth.decorator';
import {UserRole} from '../auth/user-roles.enum';
import {RolesGuard} from '../auth/roles.guard';
import {CreateSpecialtyDto} from "./dto/create-specialty.dto";

@ApiTags('Спеіальності')
@Controller('v1/specialties')
export class SpecialtyController {
    constructor(private specialtyService: SpecialtyService) {
    }

    @Roles(UserRole.USER)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() dto: CreateSpecialtyDto) {
        return this.specialtyService.createSpecialty(dto);
    }

    @Roles(UserRole.USER)
    @UseGuards(RolesGuard)
    @Get('/:number')
    getByNumber(@Param('number') number: number) {
        return this.specialtyService.getSpecialtyByNumber(number);
    }
}
