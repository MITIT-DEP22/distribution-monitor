import { ServicemanService } from './serviceman.service';
import { CreateServicemanDto } from './dto/create-serviceman.dto';
import { UpdateServicemanDto } from './dto/update-serviceman.dto';
export declare class ServicemanController {
    private readonly servicemanService;
    constructor(servicemanService: ServicemanService);
    create(createServicemanDto: CreateServicemanDto): Promise<CreateServicemanDto & import("./entities/serviceman.entity").Serviceman>;
    findAll(): Promise<import("./entities/serviceman.entity").Serviceman[]>;
    findOne(id: string): Promise<import("./entities/serviceman.entity").Serviceman>;
    update(id: string, updateServicemanDto: UpdateServicemanDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
