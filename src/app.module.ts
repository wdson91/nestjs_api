import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { PostService } from './posts/post.service';
import { UserController } from './user/user.controller';
import { PostController } from './posts/post.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Module({
  imports: [
    PostsModule,
    UserModule,],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, UserService],
})
export class AppModule { }
