import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableUser1693328690145 implements MigrationInterface {
    name = 'UpdateTableUser1693328690145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "is_seller" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_seller"`);
    }

}
