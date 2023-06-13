import { IsEmail, Length } from 'class-validator'

export class CreatePostDto {
  @Length(1, 3)
  @IsEmail()
  title: string
  @Length(1, 3)
  shortDescription: string
  @Length(1, 3)
  content: string
  @Length(1, 3)
  bloggerId: string
}
