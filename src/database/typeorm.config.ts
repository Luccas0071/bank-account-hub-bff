import { DataSource } from 'typeorm';
import { BankAccount } from '../BankAccount/entities/bankAccount.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [BankAccount],
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
});