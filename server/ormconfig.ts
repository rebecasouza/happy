module.exports = {
  type: 'postgres',
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
  migrationsRun: true,
  logging: true,
  entities: ['./src/entities/*.ts'],
};
