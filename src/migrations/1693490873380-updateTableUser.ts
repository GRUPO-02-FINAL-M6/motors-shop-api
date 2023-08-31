import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableUser1693490873380 implements MigrationInterface {
    name = 'UpdateTableUser1693490873380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "active"`);
    }

}
