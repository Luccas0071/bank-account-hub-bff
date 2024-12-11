import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { CardController } from './card.controller';
import { CARD_REPOSITORY_INTERFACE } from 'src/common/constant';
import { CardRepository } from './repositories/card.repositoy';
import { CardService } from './card.service';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  controllers: [CardController],
  providers: [
    CardService,
    {
      provide: CARD_REPOSITORY_INTERFACE,
      useClass: CardRepository,
    },
  ],
})
export class CardModule {}
