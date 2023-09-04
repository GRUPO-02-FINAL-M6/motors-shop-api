import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advertisement } from "./Advertisement.entitie";
import { CommentAds } from "./Comment.entity";
import { Address } from "./Address.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 120 })
  email: string;

  @Column({ type: "varchar", length: 120 })
  contact: string;

  @Column({ type: "varchar", length: 380, default: "" })
  description: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @OneToMany(() => CommentAds, (comment) => comment.user)
  comments: Comment[];

  @Column({ type: "boolean", default: false })
  is_seller: boolean;
  
  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt: Date;

  @OneToOne(() => Address, (address) => address.user)
  address: Address;  

  @OneToMany(() => Advertisement, (advertisement) => advertisement.user, {
    eager: true,
  })
  ads: Advertisement[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHashed = getRounds(this.password);

    if (!isHashed) this.password = hashSync(this.password, 10);
  }
}
