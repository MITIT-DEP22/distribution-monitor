import { AuthService } from './auth.service';
import { UserCredentialDto } from '../user/dto/user-credential.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userCredentialDto: UserCredentialDto): Promise<{
        token: string;
    }>;
    registration(userCredentialDto: UserCredentialDto): Promise<string>;
    isJwtValid(): Promise<{
        message: string;
    }>;
}
