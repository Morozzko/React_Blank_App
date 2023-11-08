import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LibraryModule } from './library/library.module'
import { ReviewModule } from './review/review.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'backend',
      password: 'mypassword',
      database: 'version',
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      synchronize: true,
      logging: true,
    }),
    LibraryModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
