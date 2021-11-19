import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("client")
class Client {
    @PrimaryColumn({name: "uuid"})
    id: string;
    @Column({name: "name_client"})
    nameClient: string;
    @Column({name: "birthday_client"})
    birthdayClient: string;
    @Column({name: "mail_client"})
    mailClient: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {Client}