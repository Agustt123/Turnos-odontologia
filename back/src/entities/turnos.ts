import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {User} from "./user";
import { Status } from "../interface/turnoInterface";

@Entity({ name: "turno" })
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({type:Date})
  fechaHora: Date;

  @Column({ nullable: true,type:Date })
  fechaCancelacion: Date;

  @Column({type: "enum",enum:Status,default:Status.ACTIVE})
  status: string;

  @ManyToOne(() => User,(user)=>user.turnos)
  user: User;
}
