import { Test, TestingModule } from '@nestjs/testing'
import { BloggersController } from './bloggers.controller'
import { BloggersService } from './bloggers.service'

describe('BloggersController', () => {
  let controller: BloggersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BloggersController],
      providers: [BloggersService],
    }).compile()

    controller = module.get<BloggersController>(BloggersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
