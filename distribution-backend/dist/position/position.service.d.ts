import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';
import { Repository } from 'typeorm';
import { Distribution } from '../distribution/entities/distribution.entity';
export declare class PositionService {
    private positionRepository;
    private distributionRepository;
    constructor(positionRepository: Repository<Position>, distributionRepository: Repository<Distribution>);
    topPositions(limit: number): Promise<any[]>;
    create(createPositionDto: CreatePositionDto): Promise<CreatePositionDto & Position>;
    findAll(): Promise<Position[]>;
    findOne(id: number): Promise<Position>;
    update(id: number, updatePositionDto: UpdatePositionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
