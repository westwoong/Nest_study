import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mysql',
          host: '127.0.0.1',
          port: 3306,
          username: 'root',
          password: 'woong123',
          database: 'nest',
          autoLoadEntities: true, // 자동으로 엔티티 관계를 인식해라
          synchronize: true,
          logging: true, // sequelize 로깅이랑 동일
          namingStrategy: new SnakeNamingStrategy(), // 코드에서 카멜케이스로된 테이블명을 DB에서 스네이크케이스로 변경해주는것
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('옵션 설정 에러');
        }
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
  ],
})
export class ORMModule {}
