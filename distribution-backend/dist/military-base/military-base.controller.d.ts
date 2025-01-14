import { MilitaryBaseService } from './military-base.service';
import { CreateMilitaryBaseDto } from './dto/create-military-base.dto';
import { UpdateMilitaryBaseDto } from './dto/update-military-base.dto';
export declare class MilitaryBaseController {
    private readonly militaryBaseService;
    constructor(militaryBaseService: MilitaryBaseService);
    create(createMilitaryBaseDto: CreateMilitaryBaseDto): Promise<CreateMilitaryBaseDto & import("./entities/military-base.entity").MilitaryBase>;
    findAll(): Promise<import("./entities/military-base.entity").MilitaryBase[]>;
    findOne(id: string): Promise<import("./entities/military-base.entity").MilitaryBase>;
    update(id: string, updateMilitaryBaseDto: UpdateMilitaryBaseDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
