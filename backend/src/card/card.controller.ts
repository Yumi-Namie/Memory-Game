import { Controller, Get, Post, Body,Param, Query } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto, FilterCardDto } from './dto/create-card.dto';


@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('create')
  create(@Body() createCardDto: CreateCardDto) {
    return this.cardService.create(createCardDto);
  }

  @Get('all')
  findAll() {
    return this.cardService.findAll();
  }

  @Get('theme/:themeName')
  findByTheme(@Param('themeName') themeName: string) {
    return this.cardService.findByTheme(themeName);
  }

  @Get('/filtered')
findFilteredCards(@Query() filterDto: FilterCardDto) {
    console.log('Received filterDto:', filterDto);
    return this.cardService.findFilteredCards(filterDto);
}


}
