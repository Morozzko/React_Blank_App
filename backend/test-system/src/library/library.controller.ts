import { Body, Controller, Patch } from '@nestjs/common'
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
  SyncLibraryResponseDto,
  SyncLibraryRequestDto,
} from './dto/sync-library.dto'
import { LibraryService } from './library.service'

@ApiTags('library')
@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  // @Get()
  // findAll() {
  //   return this.libraryService.findAll()
  // }
  //

  @Patch()
  @ApiBody({
    type: [SyncLibraryRequestDto],
  })
  @ApiResponse({
    type: [SyncLibraryResponseDto],
  })
  updateLibrary(@Body() updateLibraryDto: SyncLibraryRequestDto[]) {}

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.libraryService.remove(+id)
  // }
}
