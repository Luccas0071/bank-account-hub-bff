import { Module } from '@nestjs/common';
import { BankAccountController } from './bankAccount.controller';
import { BankAccountService } from './bankAccount.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './entities/bankAccount.entity';
import { BankAccountRepository } from './repositories/bankAccount.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])],
  controllers: [BankAccountController],
  providers: [
    BankAccountService,
    {
      provide: 'IBankAccountRepository',
      useClass: BankAccountRepository,
    },
  ],
})
export class BankAccountModule {}
