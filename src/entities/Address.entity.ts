import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entitie";

@Entity("Addresses")
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 8 })
  cep: string;

  @Column({ type: "varchar", length: 64 })
  state: string;

  @Column({ type: "varchar", length: 64 })
  city: string;

  @Column({ type: "varchar", length: 64 })
  street: string;

  @Column({ type: "integer" })
  number: number;

  @Column({ type: "varchar", length: 64, nullable: true })
  complement: string;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.address, { onDelete: "CASCADE" })
  user: User;
}
