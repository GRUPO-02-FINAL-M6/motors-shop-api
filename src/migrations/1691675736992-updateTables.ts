import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTables1691675736992 implements MigrationInterface {
    name = 'UpdateTables1691675736992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ADD "modelCar" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "priceFip" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "priceFip"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "modelCar"`);
    }

}
