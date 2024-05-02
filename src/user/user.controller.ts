// user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) { }

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.register(createUserDto);
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        const user = await this.authService.validateUser(
            loginUserDto.email,
            loginUserDto.password,
        );
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
    }
}
