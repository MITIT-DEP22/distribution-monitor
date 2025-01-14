import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Specialty} from "./entities/specialty.entity";
import {CreateSpecialtyDto} from "./dto/create-specialty.dto";

@Injectable()
export class SpecialtyService {
    constructor(
        @InjectRepository(Specialty) private specialtyRepository: Repository<Specialty>,
    ) {
    }

    async createSpecialty(dto: CreateSpecialtyDto) {
        const candidate = await this.specialtyRepository.findOne({where: {specialtyNumber: dto.specialtyNumber}})
        if (candidate) {
            throw new HttpException(`Specialty with number ${dto.specialtyNumber} already exist`, HttpStatus.BAD_REQUEST);
        }
        return this.specialtyRepository.save(dto);
    }

    async getSpecialtyByNumber(specialtyNumber: number) {
        try {
            return this.specialtyRepository.findOneOrFail({
                where: {specialtyNumber: specialtyNumber},
            });
        } catch (error) {
            throw new NotFoundException(`Specialty with number ${specialtyNumber} not found`);
        }
    }
}
