import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import {
  SyncLibraryRequestDto,
  SyncLibraryResponseDto,
} from './dto/sync-library.dto'

@Injectable()
export class LibraryService {
  constructor(private readonly prisma: PrismaService) {}

  async syncLibraries(
    data: SyncLibraryRequestDto[]
  ): Promise<SyncLibraryResponseDto[]> {
    // Поиск библиотек в бд: Начало
    const names = data.map(lib => lib.name)

    const dataInDb = await this.prisma.library.findMany({
      where: { name: { in: names } },
    })
    // Поиск библиотек в бд: Конец

    const notInLibraryDb = data?.filter(
      lib => !dataInDb.some(dbLib => dbLib.name === lib.name)
    )

    if (notInLibraryDb?.length) {
      const names = notInLibraryDb.map(lib => lib.name)

      const waitingOnReview = await this.prisma.review.findMany({
        where: { name: { in: names } },
      })

      if (waitingOnReview.length) {
      }
    }

    return dataInDb
  }
}
