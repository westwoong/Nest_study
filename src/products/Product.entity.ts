import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/User.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(() => User, (user) => user.products, { nullable: false })
  user: User;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
