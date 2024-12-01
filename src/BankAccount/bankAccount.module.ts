import { Module } from "@nestjs/common";
import { BankAccountController } from "./bankAccount.controller";
import { PrismaService } from "src/database/prisma.service";
import { BankAccountService } from "./bankAccount.service";
import { BankAccountRepository } from "./repositories/bankAccount.repository";


@Module({
    imports:[],
    controllers:[BankAccountController],
    providers:[
        BankAccountService,
        PrismaService,
        {
            provide: 'IBankAccountRepository', 
            useClass: BankAccountRepository
        }
    ]
})


export class BankAccountModule {}