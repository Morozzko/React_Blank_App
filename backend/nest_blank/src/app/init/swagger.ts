import { writeFileSync } from 'fs'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const initSwagger = app => {
  try {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Telegram Collector')
      .setDescription('LIMITS BOOK - BFF server API template')
      .setVersion('1.0.0')
      // .addServer('http://localhost:3000', 'standalone')
      .build()

    const document = SwaggerModule.createDocument(app, swaggerConfig)
    writeFileSync('./swagger-spec.json', JSON.stringify(document, null, 2))

    SwaggerModule.setup('/swagger', app, document)
  } catch (e) {
    console.log(e)
  }
}
