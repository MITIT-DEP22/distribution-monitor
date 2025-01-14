import { DistributionService } from './distribution.service';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
export declare class DistributionController {
    private readonly distributionService;
    constructor(distributionService: DistributionService);
    paginationFind(page?: number, limit?: number, searchBy?: string, searchedId?: number): Promise<import("nestjs-typeorm-paginate").Pagination<import("./entities/distribution.entity").Distribution, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getCount(): Promise<number>;
    findAll(): Promise<import("./entities/distribution.entity").Distribution[]>;
    create(createDistributionDto: CreateDistributionDto): Promise<CreateDistributionDto & import("./entities/distribution.entity").Distribution>;
    findOne(id: string): Promise<import("./entities/distribution.entity").Distribution>;
    update(id: string, updateDistributionDto: UpdateDistributionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
