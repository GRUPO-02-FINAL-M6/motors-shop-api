import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 120 })
  email: string;

  @Column({ type: "varchar", length: 120 })
  contact: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "varchar", length: 120 })
  createdAt: string;

  @DeleteDateColumn({ type: "varchar", length: 120 })
  deletedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHashed = getRounds(this.password);

    if (!isHashed) this.password = hashSync(this.password, 10);
  }
}
