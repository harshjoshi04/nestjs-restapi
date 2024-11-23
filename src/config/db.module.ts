import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes configuration accessible in all modules
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Use environment variable for the connection URL
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Be careful in production
    }),
  ],
})
export class DataBase {}
