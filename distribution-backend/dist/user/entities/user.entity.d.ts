import { Role } from '../../role/entities/role.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    roles: Role[];
}
