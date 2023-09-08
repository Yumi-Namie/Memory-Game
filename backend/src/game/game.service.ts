import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './schema/game.schema';
import { Model } from 'mongoose';

@Injectable()
export class GameService {
constructor(
  @InjectModel(Game.name) private gameModel: Model <Game>
){}

 async create(createGameDto: CreateGameDto) {
 const newGame = await this.gameModel.create(createGameDto)
 return newGame.save()
  }

  findAll() {
    return `This action returns all game`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }



  
  
  
}
