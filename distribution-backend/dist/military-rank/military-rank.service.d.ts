import { CreateMilitaryRankDto } from './dto/create-military-rank.dto';
import { UpdateMilitaryRankDto } from './dto/update-military-rank.dto';
import { MilitaryRank } from './entities/military-rank.entity';
import { Repository } from 'typeorm';
export declare class MilitaryRankService {
    private militaryRankRepository;
    constructor(militaryRankRepository: Repository<MilitaryRank>);
    create(createMilitaryRankDto: CreateMilitaryRankDto): Promise<CreateMilitaryRankDto & MilitaryRank>;
    findAll(): Promise<MilitaryRank[]>;
    findOne(id: number): Promise<MilitaryRank>;
    update(id: number, updateMilitaryRankDto: UpdateMilitaryRankDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
