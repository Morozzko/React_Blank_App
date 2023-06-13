import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'
import { ExceptionResponseType } from '../lib/types'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    const standardResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    }

    if (status === 400) {
      const ExceptionResponse = exception.getResponse() as ExceptionResponseType

      const errors = ExceptionResponse?.message.map(({ message, field }) => ({ message, field }))

      response.status(status).json({
        ...standardResponse,
        errors,
      })
      return
    }

    response.status(status).json({
      ...standardResponse,
    })
  }
}
