import { Test, TestingModule } from '@nestjs/testing'
import { LibraryController } from './library.controller'
import { LibraryService } from './library.service'

describe('LibraryController', () => {
  let controller: LibraryController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryController],
      providers: [LibraryService],
    }).compile()

    controller = module.get<LibraryController>(LibraryController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
