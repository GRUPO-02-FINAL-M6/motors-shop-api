import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableAds1691428774850 implements MigrationInterface {
    name = 'UpdateTableAds1691428774850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "year" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "year" date NOT NULL`);
    }

}
