import { PositionService } from './position.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
export declare class PositionController {
    private readonly positionService;
    constructor(positionService: PositionService);
    topPositions(limit?: number): Promise<any[]>;
    create(createPositionDto: CreatePositionDto): Promise<CreatePositionDto & import("./entities/position.entity").Position>;
    findAll(): Promise<import("./entities/position.entity").Position[]>;
    findOne(id: string): Promise<import("./entities/position.entity").Position>;
    update(id: string, updatePositionDto: UpdatePositionDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
