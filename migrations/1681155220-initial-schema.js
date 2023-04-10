const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1681155220 {
    name = 'initialSchema1681155220'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "admin" boolean NOT NULL DEFAULT (1))`);
    }

}
