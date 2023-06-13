import { IsArray, IsIn } from 'class-validator'
import { Character, CharacterClassEnum } from './character.entity'

export enum RogueSkillsEnum {
  Shadowstep = 'Shadowstep',
  Poison = 'Poison',
}
export class RogueCharacter extends Character {
  @IsIn([CharacterClassEnum.Rogue])
  readonly class = CharacterClassEnum.Rogue

  @IsArray()
  @IsIn(Object.values(RogueSkillsEnum), { each: true })
  readonly skills: RogueSkillsEnum[]
}
