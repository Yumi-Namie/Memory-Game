import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>('DB_USER')}:${configService.get<string>('DB_PASSWORD')}@${configService.get<string>('DB_HOST')}/${configService.get<string>('DB_NAME')}`,
      }),
      inject: [ConfigService],
    }),
    GameModule,
    UserModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
