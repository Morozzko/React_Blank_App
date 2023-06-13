import { PartialType } from '@nestjs/swagger'
import { CreateBloggerDto } from './create-blogger.dto'

export class UpdateBloggerDto extends PartialType(CreateBloggerDto) {}
