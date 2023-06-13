import { IsArray, IsIn } from 'class-validator'
import { Character, CharacterClassEnum } from './character.entity'

export enum MageSkillsEnum {
  Fireball = 'Fireball',
  Teleport = 'Teleport',
}

export class MageCharacter extends Character {
  @IsIn([CharacterClassEnum.Mage])
  readonly class = CharacterClassEnum.Mage

  @IsArray()
  @IsIn(Object.values(MageSkillsEnum), { each: true })
  readonly skills: MageSkillsEnum[]

  constructor(id: string, name: string) {
    super()
    this.name = name
    this.class = CharacterClassEnum.Mage
    this.id = id
  }
}
