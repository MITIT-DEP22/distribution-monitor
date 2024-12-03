import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReleaseYearDto } from './dto/create-release-year.dto';
import { UpdateReleaseYearDto } from './dto/update-release-year.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReleaseYear } from './entities/release-year.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReleaseYearService {
  constructor(
    @InjectRepository(ReleaseYear)
    private releaseYearRepository: Repository<ReleaseYear>,
  ) {}
  create(createReleaseYearDto: CreateReleaseYearDto) {
    return this.releaseYearRepository.save(createReleaseYearDto);
  }

  findAll() {
    return this.releaseYearRepository.find({});
  }

  findOne(id: number) {
    try {
      return this.releaseYearRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(`Release year with id ${id} not found`);
    }
  }

  update(id: number, updateReleaseYearDto: UpdateReleaseYearDto) {
    return this.releaseYearRepository.update(id, updateReleaseYearDto);
  }

  remove(id: number) {
    return this.releaseYearRepository.delete(id);
  }
}
