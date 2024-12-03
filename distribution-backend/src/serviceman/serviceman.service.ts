import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateServicemanDto } from './dto/create-serviceman.dto';
import { UpdateServicemanDto } from './dto/update-serviceman.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serviceman } from './entities/serviceman.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicemanService {
  constructor(
    @InjectRepository(Serviceman)
    private serviceManRepository: Repository<Serviceman>,
  ) {}

  async create(createServicemanDto: CreateServicemanDto) {
    try {
      return await this.serviceManRepository.save(createServicemanDto);
    } catch (error) {
      if (error.code === 'ER_NO_REFERENCED_ROW_2')
        throw new BadRequestException('RankId не валідний.');
      else throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return this.serviceManRepository.find({});
  }

  async findOne(id: number) {
    try {
      return await this.serviceManRepository.findOneOrFail({
        where: { id: id },
      });
    } catch (error) {
      if (error.code === 'ER_BAD_FIELD_ERROR')
        throw new BadRequestException('Id для пошуку не валідний.');
      else throw new NotFoundException(`serviceman з id ${id} не знайдений`);
    }
  }

  async update(id: number, updateServicemanDto: UpdateServicemanDto) {
    try {
      return await this.serviceManRepository.update(id, updateServicemanDto);
    } catch (error) {
      if (error.code === 'ER_BAD_FIELD_ERROR')
        throw new BadRequestException('Id для оновлення не валідний.');
      else if (error.code === 'ER_NO_REFERENCED_ROW_2')
        throw new BadRequestException('Id для військового звання не валідний.');
      else throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.serviceManRepository.delete(id);
    } catch (error) {
      if (error.code === 'ER_BAD_FIELD_ERROR')
        throw new BadRequestException('Id для видалення не валідний.');
      else throw new BadRequestException(error.message);
    }
  }
}
