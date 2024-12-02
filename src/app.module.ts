import { Module } from '@nestjs/common';
import { BankAccountModule } from './BankAccount/bankAccount.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true, // Carrega entidades sem precisar especifica-las
      synchronize: true, // Sincroniza com o Bd. Não deve ser usado em produção
    }),
    BankAccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
