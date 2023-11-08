import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Review } from '../review/entities/review.entity'
import { Library } from './entities/library.entity'
import { LibraryService } from './library.service'

describe('LibraryService (e2e)', () => {
  let service: LibraryService
  let libraryRepo: Repository<Library>
  let reviewRepo: Repository<Review>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'backend',
          password: 'mypassword',
          database: 'e2e_test',
          entities: [Library, Review],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Library, Review]),
      ],
      providers: [LibraryService],
    }).compile()

    service = module.get<LibraryService>(LibraryService)
    libraryRepo = module.get<Repository<Library>>(getRepositoryToken(Library))
    reviewRepo = module.get<Repository<Review>>(getRepositoryToken(Review))
  })

  it('should sync libraries correctly', async () => {
    // Очистка базы данных перед тестом
    await libraryRepo.clear()
    await reviewRepo.clear()

    const input = [
      {
        name: 'lib1',
        version: '2.0.0',
      },
      {
        name: 'lib2',
        version: '1.0.0',
      },
    ]

    const result = await service.syncLibraries(input)
    console.log(result)
    // Проверьте условия, которые вы хотите протестировать
    // Например, проверьте, что результат содержит ожидаемые библиотеки
    // или что база данных была обновлена соответствующим образом
  })
})
