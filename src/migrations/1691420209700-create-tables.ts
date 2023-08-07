import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1691420209700 implements MigrationInterface {
    name = 'CreateTables1691420209700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ads" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "brand" character varying(120) NOT NULL, "description" text NOT NULL, "year" date NOT NULL, "km" character varying NOT NULL, "fuel" character varying NOT NULL, "value" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "contact" character varying(120) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_e72da72588dc5b91427a9adda71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_e72da72588dc5b91427a9adda71"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "ads"`);
    }

}
