import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/role-auth.decorator';
import { UserRole } from '../auth/user-roles.enum';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Ролі користувача')
@Controller('v1/roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Roles(UserRole.USER)
  @UseGuards(RolesGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
