import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableUserAndAddress1693844133146 implements MigrationInterface {
    name = 'UpdateTableUserAndAddress1693844133146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Addresses" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "Addresses" ADD CONSTRAINT "UQ_cc5512a08524474323a4fac2728" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "Addresses" ADD CONSTRAINT "FK_cc5512a08524474323a4fac2728" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Addresses" DROP CONSTRAINT "FK_cc5512a08524474323a4fac2728"`);
        await queryRunner.query(`ALTER TABLE "Addresses" DROP CONSTRAINT "UQ_cc5512a08524474323a4fac2728"`);
        await queryRunner.query(`ALTER TABLE "Addresses" DROP COLUMN "userId"`);
    }

}
