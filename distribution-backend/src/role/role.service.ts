import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async createRole(dto: CreateRoleDto) {
    return this.roleRepository.save(dto);
  }

  async getRoleByValue(roleName: string) {
    try {
      return this.roleRepository.findOneOrFail({
        where: { roleName: roleName },
      });
    } catch (error) {
      throw new NotFoundException(`Role with name ${roleName} not found`);
    }
  }
}
