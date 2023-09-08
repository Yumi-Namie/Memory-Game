import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from "mongoose";



export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
@ApiProperty({example:'Yumi'})
@Prop({require:true})
name:string

@ApiProperty({example:'avatar.jpg'})
@Prop({require:false, default:"https://res.cloudinary.com/dcwt8jbja/image/upload/v1693159388/MemoryGame/user_ylswzc.png"})
avatar:string
}

export const UserSchema = SchemaFactory.createForClass(User)