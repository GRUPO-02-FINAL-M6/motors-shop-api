import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableUserAndCreateAddress1693843561111 implements MigrationInterface {
    name = 'UpdateTableUserAndCreateAddress1693843561111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Addresses" ("id" SERIAL NOT NULL, "cep" character varying(8) NOT NULL, "state" character varying(64) NOT NULL, "city" character varying(64) NOT NULL, "street" character varying(64) NOT NULL, "number" integer NOT NULL, "complement" character varying(64), CONSTRAINT "PK_239c81748e5a62ac7223a7350c5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Addresses"`);
    }

}
