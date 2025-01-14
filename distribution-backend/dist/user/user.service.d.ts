import { Repository } from 'typeorm';
import { RoleService } from '../role/role.service';
import { UserCredentialDto } from './dto/user-credential.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    private roleService;
    constructor(userRepository: Repository<User>, roleService: RoleService);
    createUser(userCredential: UserCredentialDto): Promise<{
        roles: import("../role/entities/role.entity").Role[];
        username: string;
        password: string;
    } & User>;
    getUserByUsername(username: string): Promise<User>;
}
