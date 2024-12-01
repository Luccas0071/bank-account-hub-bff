import { Injectable } from "@nestjs/common";
import { bank_accounts } from "@prisma/client";
import { PrismaService } from "src/database/prisma.service";
import { IBankAccountRepository } from "../interfaces/bankAccountRepository.interface";
import { BankAccount } from "../entities/bankAccount.entity";


@Injectable()
export class BankAccountRepository implements IBankAccountRepository
{
    constructor(private prisma: PrismaService){}

    async create(data: BankAccount): Promise<bank_accounts>
    {
        return this.prisma.bank_accounts.create({ data });
    }

    async findAll(): Promise<bank_accounts[]>
    {
        return this.prisma.bank_accounts.findMany();
    }

    async findById(id: string): Promise<bank_accounts | null>
    {
            return this.prisma.bank_accounts.findUnique({ where: { id } });
    }

    async update(id: string, data: BankAccount): Promise<bank_accounts>
    {
        return this.prisma.bank_accounts.update({
            where: { id },
            data
        });
    }

    async delete(id: string): Promise<void>
    {
        await this.prisma.bank_accounts.delete({ where: { id } });
    }
}