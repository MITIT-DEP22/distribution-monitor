import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private regionRepository: Repository<Region>,
  ) {}
  create(createRegionDto: CreateRegionDto) {
    return this.regionRepository.save(createRegionDto);
  }

  findAll() {
    return this.regionRepository.find({});
  }

  findOne(id: number) {
    try {
      return this.regionRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(`Region with id ${id} not found`);
    }
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.regionRepository.update(id, updateRegionDto);
  }

  remove(id: number) {
    return this.regionRepository.delete(id);
  }
}
