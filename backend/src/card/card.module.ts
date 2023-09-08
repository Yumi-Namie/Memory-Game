import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './schema/card.schema';
import { Game, GameSchema } from 'src/game/schema/game.schema';


@Module({
imports:[
MongooseModule.forFeature([
  {
    name:Card.name,
    schema:CardSchema
  },
  {
    name: Game.name,
    schema:GameSchema
    }
]),



],

  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
