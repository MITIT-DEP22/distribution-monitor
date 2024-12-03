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
import { MilitaryRankService } from './military-rank.service';
import { CreateMilitaryRankDto } from './dto/create-military-rank.dto';
import { UpdateMilitaryRankDto } from './dto/update-military-rank.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Військове звання')
@Controller('v1/military-ranks')
export class MilitaryRankController {
  constructor(private readonly militaryRankService: MilitaryRankService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createMilitaryRankDto: CreateMilitaryRankDto) {
    return this.militaryRankService.create(createMilitaryRankDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.militaryRankService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.militaryRankService.findOne(+id);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMilitaryRankDto: UpdateMilitaryRankDto,
  ) {
    return this.militaryRankService.update(+id, updateMilitaryRankDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.militaryRankService.remove(+id);
  }
}
