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
import { Advertisement } from "./Advertisement.entitie";


@Entity("Comments")
export class CommentAds {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    description: string;

    @ManyToOne(() => User, (user) => user.ads)
    user: User;

    @ManyToOne(() => Advertisement, (ads) => ads.comments)
    advertisement: Advertisement;

    @CreateDateColumn({ type: "date" })
    createdAt: Date;
}
