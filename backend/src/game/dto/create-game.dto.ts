import { IsEnum, IsNotEmpty, IsString, IsOptional } from "class-validator";

export enum Theme {
    heroes = 'heroes',
    food = 'food'
}

export enum Difficulty {
    easy = 6,
    medium = 8,
    hard = 12
}


export class CreateGameDto {

@IsString()
@IsNotEmpty()
@IsEnum(Theme)
theme: Theme = Theme.heroes;

@IsString()
@IsNotEmpty()
@IsEnum(Difficulty)
difficulty: Difficulty = Difficulty.easy; 

}

