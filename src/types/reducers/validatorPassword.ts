export const validatorPasswordInitial = {
  passwordLength: false,
  passwordRange: false,
  passwordAdjacent: false,
  passwordCrescent: false,
}

export interface IValidatorPasswordState {
  passwordLength: boolean,
  passwordRange: boolean,
  passwordAdjacent: boolean,
  passwordCrescent: boolean,
}

export type ValidatorPasswordTypes = 'passwordLength' | 'passwordRange' | 'passwordAdjacent' | 'passwordCrescent'

export type ValidatorPasswordActionTypes =
  | { type: 'SET_VALIDATE_PASSWORD_LENGTH', payload: boolean }
  | { type: 'SET_VALIDATE_PASSWORD_RANGE', payload: boolean }
  | { type: 'SET_VALIDATE_PASSWORD_ADJACENT', payload: boolean }
  | { type: 'SET_VALIDATE_PASSWORD_CRESCENT', payload: boolean }
  | {
    type: 'SET_VALIDATE_PASSWORD_CLEAN', payload: {
      passwordLength: boolean,
      passwordRange: boolean,
      passwordAdjacent: boolean,
      passwordCrescent: boolean
    }
  }