import { Module } from '@nestjs/common';
import { BankAccountModule } from './BankAccount/bankAccount.module';

@Module({
  imports: [BankAccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
