import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // 엔티티를 설정할때 붙여주는 데코레이터
export class User {
  @PrimaryGeneratedColumn() // autoincrement 오토 설정
  id: number;

  @Column() // 컬럼 설정할때 쓴다
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
