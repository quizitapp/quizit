import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedUserAssetAccess1719696652182 implements MigrationInterface {
    name = 'AddedUserAssetAccess1719696652182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_role_in_domain" ("id" SERIAL NOT NULL, "domainId" integer NOT NULL, "assetType" character varying NOT NULL, "assetId" integer NOT NULL, "access" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_2c1ecc60a638cfedc0ba8fd2ed6" PRIMARY KEY ("id", "domainId"))`);    
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" ADD CONSTRAINT "FK_159d011898186ce6f25a0283fa1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" ADD CONSTRAINT "FK_b5f8bd2c94b7ace9ed5aa5e0763" FOREIGN KEY ("domainId") REFERENCES "domain"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" DROP CONSTRAINT "FK_b5f8bd2c94b7ace9ed5aa5e0763"`);
        await queryRunner.query(`ALTER TABLE "user_role_in_domain" DROP CONSTRAINT "FK_159d011898186ce6f25a0283fa1"`);
        await queryRunner.query(`DROP TABLE "user_role_in_domain"`);
    }

}
