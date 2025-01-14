import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    create(dto: CreateRoleDto): Promise<CreateRoleDto & import("./entities/role.entity").Role>;
    getByValue(value: string): Promise<import("./entities/role.entity").Role>;
}
