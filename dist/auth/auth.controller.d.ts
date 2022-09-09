import { CreateUserDto } from 'src/module/user/dto/create-user.dto';
import { UserService } from 'src/module/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    register(createUserDTO: CreateUserDto): Promise<import("../module/user/schema/user.schema").User>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    getDashboard(req: any): any;
}
