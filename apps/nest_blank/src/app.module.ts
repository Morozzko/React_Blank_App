import { Module } from '@nestjs/common'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { BloggersModule } from './features/bloggers/bloggers.module'
import { PostsModule } from './features/posts/posts.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.env.UPLOAD_LOCATION),
    }),
    BloggersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
