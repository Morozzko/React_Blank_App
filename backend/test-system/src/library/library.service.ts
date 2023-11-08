import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { compare } from 'semver'
import { In, Repository } from 'typeorm'
import { Review } from '../review/entities/review.entity'
import {
  SyncLibraryRequestDto,
  SyncLibraryResponseDto,
} from './dto/sync-library.dto'
import { Library } from './entities/library.entity'

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private libraryRepository: Repository<Library>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>
  ) {}

  async syncLibraries(
    data: SyncLibraryRequestDto[]
  ): Promise<SyncLibraryResponseDto[]> {
    // Извлечение имен библиотек из входных данных: Начало
    const allNames = data.map(lib => lib.name)
    // Извлечение имен библиотек из входных данных: Конец

    // Поиск существующих библиотек в production и review: Начало
    const dataInProduction = await this.libraryRepository.find({
      where: {
        name: In(allNames),
      },
    })
    const waitingOnReview = await this.reviewRepository.find({
      where: {
        name: In(allNames),
      },
    })
    // Поиск существующих библиотек в production и review: Конец

    // Подготовка массива для хранения обновлений рецензий: Начало
    const reviewsToUpdate: Review[] = []
    // Подготовка массива для хранения обновлений рецензий: Конец

    // Перебор входных данных и сравнение версий: Начало
    for (const { name, version } of data) {
      const library = dataInProduction.find(lib => lib.name === name)
      const review = waitingOnReview.find(rev => rev.name === name)

      // Если не нашлось библиотеки или библиотека старше
      if (!library || compare(version, library.version) === 1) {
        // Если она есть в таблице review
        if (review) {
          // Если версия библиотеки больше версии в таблице review
          if (compare(version, review.version) === 1) {
            // Обновление версии в существующей рецензии: Начало
            review.version = version
            reviewsToUpdate.push(review)
            // Обновление версии в существующей рецензии: Конец
          }
          // Если ее нет в таблице review
        } else {
          // Добавление новой рецензии: Начало
          const newReview = new Review()
          newReview.name = name
          newReview.version = version
          reviewsToUpdate.push(newReview)
          // Добавление новой рецензии: Конец
        }
      }
    }
    // Перебор входных данных и сравнение версий: Конец

    // Сохранение обновленных рецензий в базу данных: Начало
    if (reviewsToUpdate.length > 0) {
      await this.reviewRepository.save(reviewsToUpdate)
    }
    // Сохранение обновленных рецензий в базу данных: Конец

    // Возвращение данных: Начало
    return dataInProduction
    // Возвращение данных: Конец
  }
}
