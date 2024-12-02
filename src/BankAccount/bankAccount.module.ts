import { Module } from '@nestjs/common';
import { BankAccountController } from './bankAccount.controller';
import { BankAccountService } from './bankAccount.service';
import { BankAccountRepository } from './repositories/bankAccount.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './entities/bankAccount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])],
  controllers: [BankAccountController],
  providers: [
    BankAccountService,
    // BankAccountRepository,
    {
      provide: 'IBankAccountRepository',
      useClass: BankAccountRepository,
    },
  ],
})
export class BankAccountModule {}
