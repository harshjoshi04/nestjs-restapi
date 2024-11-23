import { Module } from '@nestjs/common';
import { DataBase } from './config/db.module';
import { ConfigModule } from '@nestjs/config';
import { IndexModule } from './modules/index.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DataBase, IndexModule],
})
export class AppModule {}
