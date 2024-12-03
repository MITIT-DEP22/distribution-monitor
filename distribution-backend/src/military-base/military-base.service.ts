import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMilitaryBaseDto } from './dto/create-military-base.dto';
import { UpdateMilitaryBaseDto } from './dto/update-military-base.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MilitaryBase } from './entities/military-base.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MilitaryBaseService {
  constructor(
    @InjectRepository(MilitaryBase)
    private militaryBaseRepository: Repository<MilitaryBase>,
  ) {}

  create(createMilitaryBaseDto: CreateMilitaryBaseDto) {
    return this.militaryBaseRepository.save(createMilitaryBaseDto);
  }

  findAll() {
    return this.militaryBaseRepository.find({});
  }

  findOne(id: number) {
    try {
      return this.militaryBaseRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(`Military base with id ${id} not found`);
    }
  }

  update(id: number, updateMilitaryBaseDto: UpdateMilitaryBaseDto) {
    return this.militaryBaseRepository.update(id, updateMilitaryBaseDto);
  }

  remove(id: number) {
    return this.militaryBaseRepository.delete(id);
  }
}
