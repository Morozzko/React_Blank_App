import { Body, Controller, Patch } from '@nestjs/common'
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  SyncLibraryResponseDto,
  SyncLibraryRequestDto,
} from './dto/sync-library.dto'
import { LibraryService } from './library.service'
import { CleanVersionPipe } from './mappers/CleanVersionPipe'

@ApiTags('library')
@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Patch()
  @ApiBody({
    type: [SyncLibraryRequestDto],
  })
  @ApiResponse({
    type: [SyncLibraryResponseDto],
  })
  updateLibrary(
    @Body(CleanVersionPipe) updateLibraryDto: SyncLibraryRequestDto[]
  ) {
    return this.libraryService.syncLibraries(updateLibraryDto)
  }
}
