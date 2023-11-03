import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class SyncLibraryRequestDto {
  @ApiProperty({
    description: 'Уникальное имя библиотеки для обновления',
    example: 'SomeLibrary',
    required: true,
  })
  @IsString()
  name: string

  @ApiProperty({
    description: 'Новая версия библиотеки',
    example: '1.0.1',
    required: true,
  })
  @IsString()
  version: string
}

export class SyncLibraryResponseDto {
  @ApiProperty({
    description: 'Имя библиотеки',
    example: 'SomeLibrary',
  })
  name: string

  @ApiProperty({
    description: 'Подтвержденная версия библиотеки',
    example: '1.0.1',
  })
  version: string

  @ApiProperty({
    description: 'Запрещена ли библиотека',
    example: true,
  })
  isBanned?: boolean

  @ApiProperty({
    description: 'Библиотека на которую нужно перейти',
    example: 'AnotherLibrary',
  })
  libraryForMigrate?: string
}
