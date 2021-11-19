import { Owner } from "modules/owner/infra/typeorm/entities/Owner";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import {v4 as uuidV4} from "uuid";

@Entity("space")
class Space {
    @PrimaryColumn({name: "uuid"})
    id?: string;
    @Column({name: "name_space"})
    nameSpace: string;
    @Column({name: "limit_space"})
    limitSpace: number;
    @Column({name: "address_space"})
    addressSpace: string;
    @Column({name: "available_space"})
    availableSpace: number;
    @Column({name: "id_owner"})
    idOwner: Owner;
}

export {Space}