import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Посада')
@Controller('v1/positions')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get('top')
  topPositions(
    @Query('limit', new DefaultValuePipe(5), ParseIntPipe) limit: number = 5,
  ) {
    return this.positionService.topPositions(limit);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.positionService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionService.findOne(+id);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionService.update(+id, updatePositionDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionService.remove(+id);
  }
}
