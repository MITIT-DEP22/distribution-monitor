import { CreateReleaseYearDto } from './dto/create-release-year.dto';
import { UpdateReleaseYearDto } from './dto/update-release-year.dto';
import { ReleaseYear } from './entities/release-year.entity';
import { Repository } from 'typeorm';
export declare class ReleaseYearService {
    private releaseYearRepository;
    constructor(releaseYearRepository: Repository<ReleaseYear>);
    create(createReleaseYearDto: CreateReleaseYearDto): Promise<CreateReleaseYearDto & ReleaseYear>;
    findAll(): Promise<ReleaseYear[]>;
    findOne(id: number): Promise<ReleaseYear>;
    update(id: number, updateReleaseYearDto: UpdateReleaseYearDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
