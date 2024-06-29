class Env {
  readonly NODE_ENV = process.env.NODE_ENV;
  readonly IS_DEV_ENV = process.env.IS_DEV_ENV === "true";

  readonly POSTGRES_USER = process.env.POSTGRES_USER;
  readonly POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
  readonly POSTGRES_DB = process.env.POSTGRES_DB;

  readonly DB_HOST = process.env.DB_HOST;
  readonly DB_PORT = Number(process.env.DB_PORT);
  readonly DB_USERNAME = process.env.DB_USERNAME;
  readonly DB_PASSWORD = process.env.DB_PASSWORD;
  readonly DB_DATABASE = process.env.DB_DATABASE;
  readonly TYPEORM_SYNCHRONIZE = process.env.TYPEORM_SYNCHRONIZE === "true";
}

export default new Env();