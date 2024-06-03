import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({name:"credencial"})
export class Credential {
    @PrimaryGeneratedColumn()
id:number ;

@Column({unique:true,type:"varchar",length:50})
username: string;

@Column({type:"text"})
password: string;

}