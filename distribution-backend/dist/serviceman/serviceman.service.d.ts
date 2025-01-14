import { CreateServicemanDto } from './dto/create-serviceman.dto';
import { UpdateServicemanDto } from './dto/update-serviceman.dto';
import { Serviceman } from './entities/serviceman.entity';
import { Repository } from 'typeorm';
export declare class ServicemanService {
    private serviceManRepository;
    constructor(serviceManRepository: Repository<Serviceman>);
    create(createServicemanDto: CreateServicemanDto): Promise<CreateServicemanDto & Serviceman>;
    findAll(): Promise<Serviceman[]>;
    findOne(id: number): Promise<Serviceman>;
    update(id: number, updateServicemanDto: UpdateServicemanDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
