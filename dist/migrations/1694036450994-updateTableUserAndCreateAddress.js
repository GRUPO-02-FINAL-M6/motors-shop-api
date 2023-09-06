"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableUserAndCreateAddress1694036450994 = void 0;
class UpdateTableUserAndCreateAddress1694036450994 {
    constructor() {
        this.name = 'UpdateTableUserAndCreateAddress1694036450994';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "Comments" ("id" SERIAL NOT NULL, "description" text NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, "advertisementId" integer, CONSTRAINT "PK_91e576c94d7d4f888c471fb43de" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "ads" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "brand" character varying(120) NOT NULL, "description" text NOT NULL, "year" integer NOT NULL, "km" integer NOT NULL, "fuel" character varying NOT NULL, "price" double precision NOT NULL, "color" character varying NOT NULL, "priceFip" double precision NOT NULL, "active" boolean NOT NULL DEFAULT true, "images" character varying array NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, "contact" character varying(120) NOT NULL, "description" character varying(380) NOT NULL DEFAULT '', "password" character varying(120) NOT NULL, "is_seller" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "Addresses" ("id" SERIAL NOT NULL, "cep" character varying(8) NOT NULL, "state" character varying(64) NOT NULL, "city" character varying(64) NOT NULL, "street" character varying(64) NOT NULL, "number" integer NOT NULL, "complement" character varying(64), "userId" integer, CONSTRAINT "REL_cc5512a08524474323a4fac272" UNIQUE ("userId"), CONSTRAINT "PK_239c81748e5a62ac7223a7350c5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_aa80cd9ae4c341f0aeba2401b10" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_39f2e390ed6b268b0739862fcc7" FOREIGN KEY ("advertisementId") REFERENCES "ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_e72da72588dc5b91427a9adda71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "Addresses" ADD CONSTRAINT "FK_cc5512a08524474323a4fac2728" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "Addresses" DROP CONSTRAINT "FK_cc5512a08524474323a4fac2728"`);
            yield queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_e72da72588dc5b91427a9adda71"`);
            yield queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_39f2e390ed6b268b0739862fcc7"`);
            yield queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_aa80cd9ae4c341f0aeba2401b10"`);
            yield queryRunner.query(`DROP TABLE "Addresses"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "ads"`);
            yield queryRunner.query(`DROP TABLE "Comments"`);
        });
    }
}
exports.UpdateTableUserAndCreateAddress1694036450994 = UpdateTableUserAndCreateAddress1694036450994;
