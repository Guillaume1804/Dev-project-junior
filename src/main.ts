import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permet à ton Angular (localhost:4200) d'appeler l'API (localhost:3000)
  app.enableCors();

  // Active la validation automatique des DTO (POST/PUT)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // supprime les champs inconnus (sécurité)
      transform: true, // convertit types (ex: "5" -> 5 si possible)
    }),
  );

  await app.listen(3000);
}

void bootstrap();
