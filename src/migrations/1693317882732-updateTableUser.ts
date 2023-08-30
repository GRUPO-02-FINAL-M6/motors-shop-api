import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableUser1693317882732 implements MigrationInterface {
    name = 'UpdateTableUser1693317882732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
