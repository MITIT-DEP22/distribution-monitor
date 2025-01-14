import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from "./dto/create-specialty.dto";
export declare class SpecialtyController {
    private specialtyService;
    constructor(specialtyService: SpecialtyService);
    create(dto: CreateSpecialtyDto): Promise<CreateSpecialtyDto & import("./entities/specialty.entity").Specialty>;
    getByNumber(number: number): Promise<import("./entities/specialty.entity").Specialty>;
}
