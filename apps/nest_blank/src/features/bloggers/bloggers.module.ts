import { Module } from '@nestjs/common'
import { BloggersController } from './bloggers.controller'
import { BloggersService } from './bloggers.service'

@Module({
  controllers: [BloggersController],
  providers: [BloggersService],
})
export class BloggersModule {}
