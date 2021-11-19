import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClient1637292454308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "client",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name:  "name_client",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "birthday_client",
                        type: "Date",
                        isNullable: false                        
                    },
                    {
                        name:  "mail_client",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name:  "phone_client",
                        type: "varchar",
                        isNullable: false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("client")
    }

}
