import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface'
import { BadRequestException } from '@nestjs/common'
import { ExceptionType } from '../lib/types'

export const exceptionFactory = (errors: ValidationError[]) => {
  const requestExceptions = errors.reduce<ExceptionType[]>((acc, error) => {
    const localErrors = Object.keys(error.constraints).map(constraintKey => ({
      field: error.property,
      message: error.constraints[constraintKey],
    }))

    return [...acc, ...localErrors]
  }, [])
  throw new BadRequestException(requestExceptions)
}
