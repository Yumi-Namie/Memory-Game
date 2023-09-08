import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Game } from '../../game/schema/game.schema';
import { Difficulty } from '../../game/dto/create-game.dto';


export type CardDocument = HydratedDocument<Card>
@Schema()
export class Card {

  @Prop({ type: Types.ObjectId, ref: 'Game' }) 
  game: Game; 
  @Prop()
  name:string;
  @Prop()
  img_url: string;
  @Prop()
  flipped: boolean;
  @Prop()
  matched: boolean;
  @Prop()
  difficulty: string;

}

export const CardSchema = SchemaFactory.createForClass(Card);
