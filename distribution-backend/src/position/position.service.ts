import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';
import { Distribution } from '../distribution/entities/distribution.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private positionRepository: Repository<Position>,
    @InjectRepository(Distribution)
    private distributionRepository: Repository<Distribution>,
  ) {}

  async topPositions(limit: number) {
    const servicemen = await this.distributionRepository.find({
      relations: {
        position: true,
      },
    });

    const positionFrequency = {};

    const positionEntities = [];

    servicemen.forEach((distribution) => {
      const position = distribution.position.position;
      positionFrequency[position] = (positionFrequency[position] || 0) + 1;

      positionEntities.push(distribution.position);
    });

    const sortedPositions = Object.keys(positionFrequency).sort(
      (positionA, positionB) =>
        positionFrequency[positionB] - positionFrequency[positionA],
    );

    // Повертаємо відсортовані позиції та відповідні об'єкти позицій
    return sortedPositions.slice(0, limit).map((position) => {
      return positionEntities.find((entity) => entity.position === position);
    });
  }

  create(createPositionDto: CreatePositionDto) {
    return this.positionRepository.save(createPositionDto);
  }

  findAll() {
    return this.positionRepository.find({});
  }

  findOne(id: number) {
    try {
      return this.positionRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(`Position with id ${id} not found`);
    }
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return this.positionRepository.update(id, updatePositionDto);
  }

  remove(id: number) {
    return this.positionRepository.delete(id);
  }
}
