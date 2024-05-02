// src/user/user.service.ts
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { LoginUserDto } from 'src/dto/login-user.dto';
import e from 'express';
const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';
@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) { }
    saltRounds = 10;
    async register(createUserDto: CreateUserDto) {


        bcrypt.genSalt(this.saltRounds, function (err, salt) {
            bcrypt.hash(createUserDto.password, salt, function (err, hash) {
                createUserDto.password = hash;

            });
        });

        return this.prisma.user.create({
            data: createUserDto
        });



    }

    async login(loginUserDto: LoginUserDto) {
        // Implemente a lógica de login de usuário aqui
    }
    findByUsername(email: string) {

        return this.prisma.user.findUnique({
            where: {
                email: email
            }
        });


        throw new Error('Method not implemented.');
    }
}
