import { MilitaryRankService } from './military-rank.service';
import { CreateMilitaryRankDto } from './dto/create-military-rank.dto';
import { UpdateMilitaryRankDto } from './dto/update-military-rank.dto';
export declare class MilitaryRankController {
    private readonly militaryRankService;
    constructor(militaryRankService: MilitaryRankService);
    create(createMilitaryRankDto: CreateMilitaryRankDto): Promise<CreateMilitaryRankDto & import("./entities/military-rank.entity").MilitaryRank>;
    findAll(): Promise<import("./entities/military-rank.entity").MilitaryRank[]>;
    findOne(id: string): Promise<import("./entities/military-rank.entity").MilitaryRank>;
    update(id: string, updateMilitaryRankDto: UpdateMilitaryRankDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
