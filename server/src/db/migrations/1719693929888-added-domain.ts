import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedDomain1719693929888 implements MigrationInterface {
    name = 'AddedDomain1719693929888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "domain" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_27e3ec3ea0ae02c8c5bceab3ba9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "countryCode" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isVerified" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isVerified" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "countryCode"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
        await queryRunner.query(`DROP TABLE "domain"`);
    }

}
