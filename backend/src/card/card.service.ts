import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCardDto, FilterCardDto } from './dto/create-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';
import { Model } from 'mongoose';
import { Game } from '../game/schema/game.schema';

@Injectable()
export class CardService {
  constructor(
    @InjectModel(Card.name) private cardModel: Model<Card>,
    @InjectModel(Game.name) private gameModel: Model<Game>,
  ) {}

  async create(createCardDto: CreateCardDto) {
    const game = await this.gameModel.findOne({ theme: createCardDto.theme }).exec();

    if (!game) {
      throw new BadRequestException(`No game found with theme: ${createCardDto.theme}`);
    }

    const newCard = new this.cardModel({
      game: game,
      img_url: createCardDto.img_url,
      name: createCardDto.name,
      difficulty: createCardDto.difficulty,
    });

    return newCard.save();
  }

  findAll() {
    return this.cardModel.find().exec();
  }

  async findByTheme(themeName: string) {
    const gamesWithTheme = await this.gameModel.find({ theme: themeName }).exec();

    const gameIds = gamesWithTheme.map(game => game._id);

    return this.cardModel.find({ game: { $in: gameIds } }).exec();
  }

  async findFilteredCards(filterDto: FilterCardDto) {
    console.log('Received filterDto in CardService:', filterDto);

    const { theme, difficulty } = filterDto;

    const game = await this.gameModel.findOne({ theme }).exec();

    if (!game) {
      console.log(`No game found with theme: ${theme}`);
      throw new BadRequestException(`No game found with theme: ${theme}`);
    }

    const query: any = {
      game: game._id,
    };

    if (difficulty) {
      query.difficulty = difficulty;
    }

    console.log('Query:', query);

    const cards = await this.cardModel.find(query).exec();

    return cards;
  }
}
