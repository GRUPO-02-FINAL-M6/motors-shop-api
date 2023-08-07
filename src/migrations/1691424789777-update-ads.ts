import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAds1691424789777 implements MigrationInterface {
    name = 'UpdateAds1691424789777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "images" character varying array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "images" character varying NOT NULL`);
    }

}
