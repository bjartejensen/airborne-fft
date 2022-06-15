import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FftModule } from '../fft/fft.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV
        ? 'apps/api/development.env'
        : 'apps/api/development.env',
      isGlobal: true,
    }),
    FftModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
