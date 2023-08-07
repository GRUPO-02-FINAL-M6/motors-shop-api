import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAds1691421196376 implements MigrationInterface {
    name = 'UpdateAds1691421196376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ADD "images" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "images"`);
    }

}
