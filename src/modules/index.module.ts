import { Module } from '@nestjs/common';
import { PostModule } from './post.module';
import { AppModule } from './app.module';

@Module({
  imports: [PostModule, AppModule],
})
export class IndexModule {}
