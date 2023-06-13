import { Test, TestingModule } from '@nestjs/testing'
import { BloggersService } from './bloggers.service'

describe('BloggersService', () => {
  let service: BloggersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BloggersService],
    }).compile()

    service = module.get<BloggersService>(BloggersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
