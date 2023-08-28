import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTables1693232209844 implements MigrationInterface {
    name = 'UpdateTables1693232209844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "contact" character varying(120) NOT NULL, "description" character varying(380) NOT NULL, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "brand" character varying(120) NOT NULL, "description" text NOT NULL, "year" integer NOT NULL, "km" integer NOT NULL, "fuel" character varying NOT NULL, "price" double precision NOT NULL, "color" character varying NOT NULL, "priceFip" double precision NOT NULL, "images" character varying array NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_e72da72588dc5b91427a9adda71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_e72da72588dc5b91427a9adda71"`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
