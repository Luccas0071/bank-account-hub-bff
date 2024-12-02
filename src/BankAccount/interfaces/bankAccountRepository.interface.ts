// import { bank_accounts } from '@prisma/client';
// import { BankAccount } from '../entities/bankAccount.entity';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';

export interface IBankAccountRepository {
  create(data: CreateBankAccountDto);
  // findAll(): Promise<bank_accounts[]>;
  // findById(id: string): Promise<bank_accounts | null>;
  // update(id: string, data: BankAccount): Promise<bank_accounts>;
  // delete(id: string): Promise<void>;
}
