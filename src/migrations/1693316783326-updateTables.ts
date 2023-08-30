import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTables1693316783326 implements MigrationInterface {
    name = 'UpdateTables1693316783326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comments" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comments" DROP COLUMN "description"`);
    }

}
