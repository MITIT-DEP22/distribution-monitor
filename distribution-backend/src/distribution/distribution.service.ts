import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Distribution } from './entities/distribution.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { MilitaryBase } from '../military-base/entities/military-base.entity';

@Injectable()
export class DistributionService {
  constructor(
    @InjectRepository(Distribution)
    private distributionRepository: Repository<Distribution>,
    @InjectRepository(MilitaryBase)
    private militaryBaseRepository: Repository<MilitaryBase>,
  ) {}

  getDistributionCount() {
    return this.distributionRepository.count();
  }

  paginationFind(
    options: IPaginationOptions,
    searchBy: string,
    searchedId: number,
  ) {
    const where: Record<string, any> = {};

    if (searchBy === 'region') {
      where.militaryBase = {
        region: {
          id: searchedId,
        },
      };
    } else if (searchBy === 'position') {
      where.position = {
        id: searchedId,
      };
    } else if (searchBy === 'military-base') {
      where.militaryBase = {
        id: searchedId,
      };
    } else if (searchBy === 'year') {
      where.releaseYear = {
        id: searchedId,
      };
    }
    // else {
    //   throw new BadRequestException('Не коректний параметр пошуку');
    // }

    console.log(where);

    return paginate<Distribution>(this.distributionRepository, options, {
      where: where,
      relations: {
        serviceMan: true,
        position: true,
        releaseYear: true,
        militaryBase: {
          region: true,
        },
      },
    });
  }

  findAll() {
    return this.distributionRepository.find({
      relations: {
        serviceMan: true,
        position: true,
        releaseYear: true,
        militaryBase: {
          region: true,
        },
      },
    });
  }

  create(createDistributionDto: CreateDistributionDto) {
    return this.distributionRepository.save(createDistributionDto);
  }

  async findOne(id: number) {
    try {
      return await this.distributionRepository.findOneOrFail({
        where: { id: id },
        relations: {
          serviceMan: true,
          position: true,
          releaseYear: true,
          militaryBase: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Distribution with id ${id} not found`);
    }
  }

  update(id: number, updateDistributionDto: UpdateDistributionDto) {
    return this.distributionRepository.update(id, updateDistributionDto);
  }

  remove(id: number) {
    return this.distributionRepository.delete(id);
  }
}
