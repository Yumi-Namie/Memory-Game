import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";



export type GameDocument = HydratedDocument<Game>

@Schema()
export class Game {
@ApiProperty({example:['heroes','food']})
@Prop({required:true,default:'heroes'})
theme:string

@ApiProperty({example:['easy','medium','hard']})
@Prop({required:true,enum:['easy','medium','hard']})
difficulty:string



}
export const GameSchema = SchemaFactory.createForClass(Game)