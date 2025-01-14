import { CreateMilitaryBaseDto } from './dto/create-military-base.dto';
import { UpdateMilitaryBaseDto } from './dto/update-military-base.dto';
import { MilitaryBase } from './entities/military-base.entity';
import { Repository } from 'typeorm';
export declare class MilitaryBaseService {
    private militaryBaseRepository;
    constructor(militaryBaseRepository: Repository<MilitaryBase>);
    create(createMilitaryBaseDto: CreateMilitaryBaseDto): Promise<CreateMilitaryBaseDto & MilitaryBase>;
    findAll(): Promise<MilitaryBase[]>;
    findOne(id: number): Promise<MilitaryBase>;
    update(id: number, updateMilitaryBaseDto: UpdateMilitaryBaseDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
