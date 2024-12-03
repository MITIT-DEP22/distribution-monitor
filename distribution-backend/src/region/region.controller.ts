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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Регіон в/ч')
@Controller('v1/regions')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
