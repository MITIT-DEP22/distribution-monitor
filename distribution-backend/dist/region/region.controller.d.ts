import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    create(createRegionDto: CreateRegionDto): Promise<CreateRegionDto & import("./entities/region.entity").Region>;
    findAll(): Promise<import("./entities/region.entity").Region[]>;
    findOne(id: string): Promise<import("./entities/region.entity").Region>;
    update(id: string, updateRegionDto: UpdateRegionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
