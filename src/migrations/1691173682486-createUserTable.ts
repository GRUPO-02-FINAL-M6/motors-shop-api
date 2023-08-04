import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1691173682486 implements MigrationInterface {
    name = 'CreateUserTable1691173682486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" character varying(120)`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" character varying(120) NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
