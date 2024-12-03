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
import { ServicemanService } from './serviceman.service';
import { CreateServicemanDto } from './dto/create-serviceman.dto';
import { UpdateServicemanDto } from './dto/update-serviceman.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Військовослужбовці')
@Controller('v1/servicemen')
export class ServicemanController {
  constructor(private readonly servicemanService: ServicemanService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createServicemanDto: CreateServicemanDto) {
    return this.servicemanService.create(createServicemanDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.servicemanService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicemanService.findOne(+id);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServicemanDto: UpdateServicemanDto,
  ) {
    return this.servicemanService.update(+id, updateServicemanDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicemanService.remove(+id);
  }
}
