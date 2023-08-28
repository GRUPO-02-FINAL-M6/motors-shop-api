import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advertisement } from "./Advertisement.entitie";

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

  @Column({ type: "varchar", length: 380 })
  description: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt: Date;

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
