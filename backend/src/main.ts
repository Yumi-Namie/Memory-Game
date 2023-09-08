import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://memory-game-gamma-seven.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  app.setGlobalPrefix('brascuba')

  //Config de Swagger
  const options = new DocumentBuilder()
    .setTitle('Game-BrasCuba Api')
    .setDescription('Documentation of Game-BrasCuba Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  //Config del endpoint para la documentacion de la api

  SwaggerModule.setup('docs', app, document);

  //Config de validacion de tipos de los DTO

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
