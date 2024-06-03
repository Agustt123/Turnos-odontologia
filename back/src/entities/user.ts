import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./credencial";
import { Turno } from "./turnos";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true, type: "varchar" })
  email: string;

  @Column({ type: "date" })
  birthdate: Date;

  @OneToOne(() => Credential,  ) // Establece la relación uno a uno con la entidad Credential
  @JoinColumn({name:"credencialid"})
  credential: Credential;

  @OneToMany(() => Turno, turno => turno.user) // Establece la relación uno a muchos con la entidad Turno
  turnos: Turno[];
}
