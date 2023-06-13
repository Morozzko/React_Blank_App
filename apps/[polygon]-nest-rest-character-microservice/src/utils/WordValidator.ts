import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

const badWords = ['W1', 'W2']

@ValidatorConstraint({ async: false })
export class IsWordValidConstraint implements ValidatorConstraintInterface {
  validate(key: string, args: ValidationArguments) {
    return !badWords.some(word => key.includes(word))
  }

  defaultMessage(args: ValidationArguments) {
    return 'Text contains forbidden words'
  }
}
