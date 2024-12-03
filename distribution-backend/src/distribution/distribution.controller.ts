import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  DefaultValuePipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { DistributionService } from './distribution.service';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Випуск')
@Controller('v1/distributions')
export class DistributionController {
  constructor(private readonly distributionService: DistributionService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get()
  paginationFind(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Query('by', new DefaultValuePipe('')) searchBy: string = '',
    @Query('id', new DefaultValuePipe(0), ParseIntPipe) searchedId: number = 0,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.distributionService.paginationFind(
      {
        page,
        limit,
      },
      searchBy,
      searchedId,
    );
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get('/count')
  getCount() {
    return this.distributionService.getDistributionCount();
  }

  // @Roles(UserRole.USER)
  // @UseGuards(RolesGuard)
  @Get('/all')
  findAll() {
    return this.distributionService.findAll();
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createDistributionDto: CreateDistributionDto) {
    return this.distributionService.create(createDistributionDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributionService.findOne(+id);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistributionDto: UpdateDistributionDto,
  ) {
    return this.distributionService.update(+id, updateDistributionDto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distributionService.remove(+id);
  }
}
