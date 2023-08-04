import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1691172538236 implements MigrationInterface {
    name = 'CreateUserTable1691172538236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cars" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "brand" character varying(120) NOT NULL, "description" text NOT NULL, "year" date NOT NULL, "km" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_37ee9dbe8c8c8ff70b35afaf2a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "contact" character varying(120) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" character varying(120) NOT NULL DEFAULT now(), "deletedAt" character varying(120), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "Cars"`);
    }

}
