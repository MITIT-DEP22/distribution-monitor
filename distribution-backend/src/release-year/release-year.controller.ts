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
import { ReleaseYearService } from './release-year.service';
import { CreateReleaseYearDto } from './dto/create-release-year.dto';
import { UpdateReleaseYearDto } from './dto/update-release-year.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Рік випуску')
@Controller('v1/release-years')
export class ReleaseYearController {
  constructor(private readonly releaseYearService: ReleaseYearService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createReleaseYearDto: CreateReleaseYearDto) {
    return this.releaseYearService.create(createReleaseYearDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.releaseYearService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.releaseYearService.findOne(+id);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReleaseYearDto: UpdateReleaseYearDto,
  ) {
    return this.releaseYearService.update(+id, updateReleaseYearDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.releaseYearService.remove(+id);
  }
}
