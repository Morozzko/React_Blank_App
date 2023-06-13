import { Module } from '@nestjs/common'
import { BloggersService } from './bloggers.service'
import { BloggersController } from './bloggers.controller'

@Module({
  controllers: [BloggersController],
  providers: [BloggersService],
})
export class BloggersModule {}
