import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateBankAccountDto } from "./dto/createBankAccount.dto";
import { BankAccountService } from "./bankAccount.service";
import { UpdateBankAccountDto } from "./dto/updateBankAccount";

@Controller('bankAccount')
export class BankAccountController
{
    constructor(private bankAccountService: BankAccountService){}

    @Post()
    create(@Body() createBankAccountDto:CreateBankAccountDto)
    {
        return this.bankAccountService.create(createBankAccountDto)
    }

    @Get()
    findAll()
    {
        return this.bankAccountService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: string)
    {
        return this.bankAccountService.find(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateBankAccountDto: UpdateBankAccountDto)
    {
        return this.bankAccountService.update(id, updateBankAccountDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string)
    {
        return this.bankAccountService.remove(id)
    }
}