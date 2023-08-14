import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../products/Product.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, comment: '사용자 이름' })
  name: string;

  @Column({ nullable: false, comment: '휴대폰 번호' })
  phoneNumber: string;

  @Column({ nullable: false, comment: '사용자 주소' })
  address: string;

  @Column({ nullable: false, comment: '업체명' })
  companyName: string;

  @Column({ nullable: false, comment: '사업자 번호' })
  businessNumber: string;

  @OneToMany(() => Product, (product) => product.user, { nullable: false })
  products: Product[];

  constructor(
    name: string,
    phoneNumber: string,
    address: string,
    companyName: string,
    businessNumber: string,
  ) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.companyName = companyName;
    this.businessNumber = businessNumber;
  }
}
