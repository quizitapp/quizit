import { MigrationInterface, QueryRunner } from "typeorm";

export class DBEntity1719702974706 implements MigrationInterface {
    name = 'DBEntity1719702974706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "domain" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "domain" ADD "updatedBy" integer`);
        await queryRunner.query(`ALTER TABLE "domain" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "domain" ADD "deletedBy" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedBy" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedBy" integer`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" ADD "updatedBy" integer`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" ADD "deletedBy" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "deletedBy"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "domain" DROP COLUMN "createdBy"`);
    }

}
