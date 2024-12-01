import { Inject } from "@nestjs/common";
import { CreateBankAccountDto } from "./dto/createBankAccount.dto";
import { IBankAccountRepository } from "./interfaces/bankAccountRepository.interface";
import { UpdateBankAccountDto } from "./dto/updateBankAccount";

export class BankAccountService
{
    constructor(
        @Inject('IBankAccountRepository')
        private readonly bankAccountRepository: IBankAccountRepository
    ){}

    async create(createBankAccountDto: CreateBankAccountDto)
    {
        return this.bankAccountRepository.create(createBankAccountDto)
    }

    async findAll()
    {
        return this.bankAccountRepository.findAll();
    }

    async find(id: string)
    {
        const bankAccount = await this.bankAccountRepository.findById(id);
        if(!bankAccount){
            throw new Error("Conta bancaria não encontrado!");
        }
        return bankAccount;
    }

    async update(id: string, updateBankAccountDto: UpdateBankAccountDto)
    {
        await this.find(id);
        return this.bankAccountRepository.update(id, updateBankAccountDto)
    }
    
    async remove(id:string)
    {
        await this.find(id);
        return this.bankAccountRepository.delete(id);
    }
}