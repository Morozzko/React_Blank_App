import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { LibraryController } from './library.controller'
import { LibraryService } from './library.service'

@Module({
  controllers: [LibraryController],
  providers: [LibraryService, PrismaService],
})
export class LibraryModule {}
