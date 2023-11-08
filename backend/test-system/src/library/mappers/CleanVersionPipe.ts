import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { SyncLibraryRequestDto } from '../dto/sync-library.dto'

@Injectable()
export class CleanVersionPipe implements PipeTransform {
  transform(value: SyncLibraryRequestDto[]) {
    if (!Array.isArray(value)) {
      throw new BadRequestException('Expected an array')
    }

    return value.map(item => {
      if (typeof item.version === 'string') {
        return {
          ...item,
          version: item.version.replace('^', ''),
        }
      }

      return item
    })
  }
}
