import { join } from 'path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { CharactersModule } from './modules/characters/characters.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.env.UPLOAD_LOCATION),
    }),
    CharactersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
