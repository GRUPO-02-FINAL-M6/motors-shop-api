import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entitie";
import { CommentAds } from "./Comment.entity";

export enum Fuel {
  flex = "Flex",
  hybrid = "Híbrido",
  electric = "Elétrico",
}

@Entity("ads")
export class Advertisement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 120 })
  name: string;

  @Column({ type: "varchar", length: 120 })
  brand: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "integer" })
  year: number;

  @Column({ type: "integer" })
  km: number;

  @Column({ type: "varchar" })
  fuel: Fuel;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "varchar" })
  color: string;

  @Column({ type: "float" })
  priceFip: number;

  @Column({ type: "varchar", array: true })
  images: string[];

  @ManyToOne(() => User, (user) => user.ads)
  user: User;

  @OneToMany(() => CommentAds, (comment) => comment.advertisement)
  comments: Comment[];

  @CreateDateColumn({ type: "date" })
  createdAt: Date;
}
