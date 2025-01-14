import { Repository } from 'typeorm';
import { Specialty } from "./entities/specialty.entity";
import { CreateSpecialtyDto } from "./dto/create-specialty.dto";
export declare class SpecialtyService {
    private specialtyRepository;
    constructor(specialtyRepository: Repository<Specialty>);
    createSpecialty(dto: CreateSpecialtyDto): Promise<CreateSpecialtyDto & Specialty>;
    getSpecialtyByNumber(specialtyNumber: number): Promise<Specialty>;
}
