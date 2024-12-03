import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMilitaryRankDto } from './dto/create-military-rank.dto';
import { UpdateMilitaryRankDto } from './dto/update-military-rank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MilitaryRank } from './entities/military-rank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MilitaryRankService {
  constructor(
    @InjectRepository(MilitaryRank)
    private militaryRankRepository: Repository<MilitaryRank>,
  ) {}
  create(createMilitaryRankDto: CreateMilitaryRankDto) {
    return this.militaryRankRepository.save(createMilitaryRankDto);
  }

  findAll() {
    return this.militaryRankRepository.find({});
  }

  findOne(id: number) {
    try {
      return this.militaryRankRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(`Military rank with id ${id} not found`);
    }
  }

  update(id: number, updateMilitaryRankDto: UpdateMilitaryRankDto) {
    return this.militaryRankRepository.update(id, updateMilitaryRankDto);
  }

  remove(id: number) {
    return this.militaryRankRepository.delete(id);
  }
}
