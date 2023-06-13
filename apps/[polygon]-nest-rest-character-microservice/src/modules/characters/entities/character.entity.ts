import { IsIn, IsString, IsUUID, Validate } from 'class-validator'
import { IsWordValidConstraint } from '../../../utils/WordValidator'

export enum CharacterClassEnum {
  Mage = 'Mage',
  Rogue = 'Rogue',
}

export abstract class CharacterCore {
  @IsString()
  @Validate(IsWordValidConstraint)
  name: string

  @IsIn(Object.values(CharacterClassEnum))
  class: CharacterClassEnum
}

export abstract class Character extends CharacterCore {
  @IsUUID()
  id: string

  abstract class: CharacterClassEnum
  abstract skills: unknown[]
}
