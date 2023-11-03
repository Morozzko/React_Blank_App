import { NestFactory } from '@nestjs/core'
import { initSwagger } from './app/init/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api/v1')

  initSwagger(app)

  await app.listen(3000)
}
bootstrap()
