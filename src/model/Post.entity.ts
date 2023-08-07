import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn() // autoincrement 오토 설정
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
