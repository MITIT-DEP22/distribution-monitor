import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserCredentialDto } from '../user/dto/user-credential.dto';
import { User } from '../user/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(userDto: UserCredentialDto): Promise<{
        token: string;
    }>;
    registration(userCredential: UserCredentialDto): Promise<string>;
    generateToken(user: User): Promise<{
        token: string;
    }>;
    private validateUser;
}
