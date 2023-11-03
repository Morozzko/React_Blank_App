import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LibraryModule } from './library/library.module'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [LibraryModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
