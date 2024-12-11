import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  // Put,
} from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { BankAccountService } from './bankAccount.service';

@Controller('bankAccount')
export class BankAccountController {
  constructor(private bankAccountService: BankAccountService) {}

  @Post()
  create(@Body() createBankAccountDto: CreateBankAccountDto) {
    const response = this.bankAccountService.create(createBankAccountDto);
    return response;
  }

  @Get()
  findAll() {
    return this.bankAccountService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.bankAccountService.find(id);
  }

  // @Put(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBankAccountDto: UpdateBankAccountDto,
  // ) {
  //   return this.bankAccountService.update(id, updateBankAccountDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankAccountService.remove(id);
  }
}
