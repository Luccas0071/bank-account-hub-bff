import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BankAccount } from '../entities/bankAccount.entity';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { IBankAccountRepository } from '../interfaces/bankAccountRepository.interface';
import { InjectRepository } from '@nestjs/typeorm';
// import { bank_accounts } from '@prisma/client';
// import { IBankAccountRepository } from '../interfaces/bankAccountRepository.interface';
// import { BankAccount } from '../entities/bankAccount.entity';

@Injectable()
export class BankAccountRepository implements IBankAccountRepository {
  constructor(
    @InjectRepository(BankAccount)
    private readonly bankAccountRepository: Repository<BankAccount>,
  ) {}

  async create(bankAccount: CreateBankAccountDto) {
    return this.bankAccountRepository.save(bankAccount);
  }
  //   async findAll(): Promise<bank_accounts[]> {
  //     // return this.prisma.bank_accounts.findMany();
  //   }
  //   async findById(id: string): Promise<bank_accounts | null> {
  //     // return this.prisma.bank_accounts.findUnique({ where: { id } });
  //   }
  //   async update(id: string, data: BankAccount): Promise<bank_accounts> {
  //     // return this.prisma.bank_accounts.update({
  //     //   where: { id },
  //     //   data,
  //     // });
  //   }
  //   async delete(id: string): Promise<void> {
  //     // await this.prisma.bank_accounts.delete({ where: { id } });
  //   }
}
