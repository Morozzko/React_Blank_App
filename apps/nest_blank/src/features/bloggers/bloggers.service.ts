import { Injectable } from '@nestjs/common'
import { CreateBloggerDto } from './dto/create-blogger.dto'
import { UpdateBloggerDto } from './dto/update-blogger.dto'

@Injectable()
export class BloggersService {
  create(createBloggerDto: CreateBloggerDto) {
    return 'This action adds a new blogger'
  }

  findAll() {
    return `This action returns all bloggers`
  }

  findOne(id: number) {
    return `This action returns a #${id} blogger`
  }

  update(id: number, updateBloggerDto: UpdateBloggerDto) {
    return `This action updates a #${id} blogger`
  }

  remove(id: number) {
    return `This action removes a #${id} blogger`
  }
}
