import { Body, Controller, Post } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Post()
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }
}
