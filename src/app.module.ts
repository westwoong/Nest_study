import { Module } from '@nestjs/common';
import { ORMModule } from './config/ORM.module';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [ProductModule, UserModule, ORMModule],
})
export class AppModule {}
