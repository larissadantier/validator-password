import { IValidatorPasswordState, ValidatorPasswordActionTypes } from "../../types/reducers/validatorPassword";

export const reducerValidatePassword = (state: IValidatorPasswordState, action: ValidatorPasswordActionTypes): IValidatorPasswordState => {
  switch (action.type) {
    case 'SET_VALIDATE_PASSWORD_LENGTH':
      return {
        ...state,
        passwordLength: action.payload
      }
    case 'SET_VALIDATE_PASSWORD_RANGE':
      return {
        ...state,
        passwordRange: action.payload
      }
    case 'SET_VALIDATE_PASSWORD_ADJACENT':
      return {
        ...state,
        passwordAdjacent: action.payload
      }
    case 'SET_VALIDATE_PASSWORD_CRESCENT':
      return {
        ...state,
        passwordCrescent: action.payload
      }
    case 'SET_VALIDATE_PASSWORD_CLEAN':
      return {
        ...state,
        passwordLength: action.payload.passwordLength,
        passwordRange: action.payload.passwordRange,
        passwordAdjacent: action.payload.passwordAdjacent,
        passwordCrescent: action.payload.passwordCrescent
      }
    default:
      throw new Error('Ação não existente');
  }
}

export const hasNumbersAdjancents = (value: string) => {
  if (!value) throw new Error('Necessário o valor para a validação')

  for (let index = 0; index < value.length - 1; index++) {
    if (value[index] === value[index + 1]) {
      return true;
    }
  }

  return false;
}

export const hasNumbersIsCrescent = (value: string) => {
  if (!value) throw new Error('Necessário o valor para a validação')

  if (value.length <= 1) {
    return false;
  }

  for (let index = 0; index < value.length - 1; index++) {
    if (value[index] > value[index + 1]) {
      return false;
    }
  }

  return true;
}