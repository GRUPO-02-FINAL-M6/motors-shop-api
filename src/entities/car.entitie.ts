import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("Cars")
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 120 })
  brand: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "date" })
  year: Date;

  @Column({ type: "varchar" })
  km: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @DeleteDateColumn({ type: "date" })
  deletedAt: Date;
}
