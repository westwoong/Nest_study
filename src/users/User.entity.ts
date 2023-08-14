import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/Product.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  phoneNumber: string;

  @Column({ nullable: false })
  address: string;

  @OneToMany(() => Product, (product) => product.user, { nullable: false })
  products: Product[];
}
