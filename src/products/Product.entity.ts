import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/User.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, comment: '상품 명' })
  name: string;

  @Column({ nullable: false, comment: '상품 가격' })
  price: number;

  @Column({ nullable: false, comment: '상품 설명' })
  description: string;

  @ManyToOne(() => User, (user) => user.products, { nullable: false })
  user: User;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
