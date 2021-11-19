import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpace1637326438301 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "space",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name_space",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "limit_space",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "address_space",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "available_space",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "id_owner",
                        type: "varchar",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKSpaceAndOwner",
                        referencedTableName: "owner",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_owner"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("space")
    }

}
