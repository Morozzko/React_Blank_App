import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReviewModule } from '../review/review.module'
import { Library } from './entities/library.entity'
import { LibraryController } from './library.controller'
import { LibraryService } from './library.service'
@Module({
  imports: [TypeOrmModule.forFeature([Library]), ReviewModule],
  controllers: [LibraryController],
  providers: [LibraryService],
  exports: [TypeOrmModule],
})
export class LibraryModule {}
