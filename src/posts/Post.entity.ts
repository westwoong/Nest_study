import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../config/default.entity';

@Entity('posts')
export class Post extends DefaultEntity {
  @Column()
  title: string;

  @Column()
  content: string;
}
