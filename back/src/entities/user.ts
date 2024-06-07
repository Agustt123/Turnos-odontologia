<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./credencial";
import { Turno } from "./turnos";

@Entity({ name: "users" })
=======
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Credential } from './Credential'; // Asegúrate de que el nombre del archivo sea correcto
import { Turno } from './appointment'; // Asegúrate de que el nombre del archivo sea correcto

@Entity({ name: 'users' })
>>>>>>> 4798aac
export class User {
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
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
=======
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  nDni: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credential: Credential;

  @Column({ nullable: true })
  profilePicture: string;

  @OneToMany(() => Turno, appointment => appointment.user)
  appointments: Turno[];
>>>>>>> 4798aac
}
