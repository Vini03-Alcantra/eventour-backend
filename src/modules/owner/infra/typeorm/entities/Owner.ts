import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidV4} from "uuid"

@Entity("owner")
class Owner {
    @PrimaryColumn({generated: "uuid"})
    id: string;
    @Column({name: "name_owner"})
    nameOwner: string;
    @Column({name: "birthday_owner"})
    birthdayOwner: string;
    @Column({name: "mail_owner"})
    mailOwner: string;
    @Column({name: "phone_owner"})
    phoneOwner: string;
    @Column({name: "cpf_owner"})
    cpfOwner: string;
    @Column({name: "password_owner"})
    passwordOwner: string;
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {Owner}