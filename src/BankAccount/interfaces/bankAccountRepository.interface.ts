import { bank_accounts } from "@prisma/client";
import { BankAccount } from "../entities/bankAccount.entity";

export interface IBankAccountRepository
{
    create(data: BankAccount): Promise<bank_accounts>
    findAll(): Promise<bank_accounts[]>
    findById(id: string): Promise<bank_accounts | null>
    update(id: string, data: BankAccount): Promise<bank_accounts>
    delete(id: string): Promise<void>
}