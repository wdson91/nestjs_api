/*
https://docs.nestjs.com/controllers#controllers
*/
// post.controller.ts
import {
    Controller,
    Put,
    Param,
    Body,
    Post,
    Get,
    Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { UpdatePostDto } from 'src/dto/update-post.dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postService.update(id, updatePostDto);
    }

    @Get()
    async findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.postService.remove(id);
    }
}
