import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MilitaryBaseService } from './military-base.service';
import { CreateMilitaryBaseDto } from './dto/create-military-base.dto';
import { UpdateMilitaryBaseDto } from './dto/update-military-base.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Військова частина')
@Controller('v1/military-bases')
export class MilitaryBaseController {
  constructor(private readonly militaryBaseService: MilitaryBaseService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createMilitaryBaseDto: CreateMilitaryBaseDto) {
    return this.militaryBaseService.create(createMilitaryBaseDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.militaryBaseService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    return this.militaryBaseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMilitaryBaseDto: UpdateMilitaryBaseDto,
  ) {
    return this.militaryBaseService.update(+id, updateMilitaryBaseDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.militaryBaseService.remove(+id);
  }
}
