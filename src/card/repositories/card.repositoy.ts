import { Injectable } from '@nestjs/common';
import { ICardRepository } from './cardRepository.interface';
import { CreateCardDto } from '../dto/create-card.dto';
import { Card } from '../entities/card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CardRepository implements ICardRepository {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async create(card: CreateCardDto) {
    return this.cardRepository.save(card);
  }
}
