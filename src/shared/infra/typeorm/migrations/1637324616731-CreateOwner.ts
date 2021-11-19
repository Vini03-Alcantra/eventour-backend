import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOwner1637324616731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "owner",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name_owner",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "birthday_owner",
                        type: "timestamp",
                        isNullable: false
                    },
                    {
                        name: "mail_owner",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "number_owner",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "cpf_owner",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "password_owner",
                        type: "varchar",
                        isNullable: false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("owner")
    }

}
