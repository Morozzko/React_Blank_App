import { writeFileSync } from 'fs'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { version } from '../../../package.json'
export const initSwagger = app => {
  try {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('Version Synchronization')
      .setDescription('Microservice for Version Synchronization')
      .setVersion(version)
      .addServer('http://localhost:3000', 'standalone')
      .build()

    const document = SwaggerModule.createDocument(app, swaggerConfig)
    writeFileSync('./swagger.json', JSON.stringify(document, null, 2))

    SwaggerModule.setup('/swagger', app, document)
  } catch (e) {
    console.log(e)
  }
}
