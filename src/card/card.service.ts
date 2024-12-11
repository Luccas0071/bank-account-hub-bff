import { Inject, Injectable } from '@nestjs/common';
import { ICardRepository } from './repositories/cardRepository.interface';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardService {
  constructor(
    @Inject('ICardRepository')
    private readonly cardRepository: ICardRepository,
  ) {}

  create(createCardDto: CreateCardDto) {
    return this.cardRepository.create(createCardDto);
  }
}
