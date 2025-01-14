import { ReleaseYearService } from './release-year.service';
import { CreateReleaseYearDto } from './dto/create-release-year.dto';
import { UpdateReleaseYearDto } from './dto/update-release-year.dto';
export declare class ReleaseYearController {
    private readonly releaseYearService;
    constructor(releaseYearService: ReleaseYearService);
    create(createReleaseYearDto: CreateReleaseYearDto): Promise<CreateReleaseYearDto & import("./entities/release-year.entity").ReleaseYear>;
    findAll(): Promise<import("./entities/release-year.entity").ReleaseYear[]>;
    findOne(id: string): Promise<import("./entities/release-year.entity").ReleaseYear>;
    update(id: string, updateReleaseYearDto: UpdateReleaseYearDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
