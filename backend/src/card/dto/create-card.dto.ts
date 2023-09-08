import { IsNotEmpty, IsString ,IsEnum, IsOptional} from "class-validator";
import { Difficulty, Theme } from '../../game/dto/create-game.dto';

  
export class CreateCardDto {
 @IsString()
  @IsNotEmpty()
  theme:string

  @IsNotEmpty()
    @IsString()
    name:string
    
    @IsNotEmpty()
    @IsString()
    img_url:string;

    @IsEnum(Difficulty)
  @IsOptional()
  difficulty?: Difficulty;

}

export class FilterCardDto {
  @IsEnum(Theme)
  @IsOptional()
  theme?: Theme;

  @IsEnum(Difficulty)
  @IsOptional()
  difficulty?: Difficulty;
}