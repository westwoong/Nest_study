import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { CreatePostDto } from './dto/createPost.dto';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, PostService, CreatePostDto],
})
export class AppModule {}

