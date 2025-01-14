import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
import { Distribution } from './entities/distribution.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { MilitaryBase } from '../military-base/entities/military-base.entity';
export declare class DistributionService {
    private distributionRepository;
    private militaryBaseRepository;
    constructor(distributionRepository: Repository<Distribution>, militaryBaseRepository: Repository<MilitaryBase>);
    getDistributionCount(): Promise<number>;
    paginationFind(options: IPaginationOptions, searchBy: string, searchedId: number): Promise<import("nestjs-typeorm-paginate").Pagination<Distribution, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findAll(): Promise<Distribution[]>;
    create(createDistributionDto: CreateDistributionDto): Promise<CreateDistributionDto & Distribution>;
    findOne(id: number): Promise<Distribution>;
    update(id: number, updateDistributionDto: UpdateDistributionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
