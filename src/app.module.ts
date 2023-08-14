import { Module } from '@nestjs/common';
import { PostModule } from './posts/post.module';
import { ORMModule } from './config/ORM.module';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [PostModule, ProductModule, UserModule, ORMModule],
})
export class AppModule {}
