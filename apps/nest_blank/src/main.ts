import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { initFileSystem } from './app/init/fileSystem'
import { initSwagger } from './app/init/swagger'
import { exceptionFactory } from './app/validation/exception/exceptionFactory'
import { HttpExceptionFilter } from './app/validation/filters/http-exception.filter'
import { AppModule } from './app.module'

async function bootstrap() {
  const PORT = process.env.PORT || 7000

  const app = await NestFactory.create(AppModule)

  app.enableCors()
  app.setGlobalPrefix('/api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory,
    })
  )
  app.useGlobalFilters(new HttpExceptionFilter())

  initSwagger(app)
  initFileSystem()

  await app.listen(PORT)
}
bootstrap()
