import { useEffect, useReducer } from "react"

import { hasNumbersAdjancents, hasNumbersIsCrescent, reducerValidatePassword } from "../utils/validator/password"
import { IValidatorPasswordState, validatorPasswordInitial } from "../types/reducers/validatorPassword"

interface ValidatorPasswordResponse {
  validatorPasswordState: IValidatorPasswordState,
}

export const useValidatorPassword = (value: string): ValidatorPasswordResponse => {
  const [validatorPasswordState, validatorPasswordDispatch] = useReducer(reducerValidatePassword, validatorPasswordInitial)

  useEffect(() => {
    if (!value) {
      validatorPasswordDispatch({
        type: 'SET_VALIDATE_PASSWORD_CLEAN',
        payload: {
          passwordRange: false,
          passwordAdjacent: false,
          passwordCrescent: false,
          passwordLength: false
        }
      });
      return
    }

    const convertToNumber = Number(value);
    const isInRange = convertToNumber >= 184759 && convertToNumber <= 856920;
    const isCorrectLength = value.length === 6;
    const isAdjacent = hasNumbersAdjancents(value)
    const isCrescent = hasNumbersIsCrescent(value)

    validatorPasswordDispatch({ type: 'SET_VALIDATE_PASSWORD_LENGTH', payload: isCorrectLength });
    validatorPasswordDispatch({ type: 'SET_VALIDATE_PASSWORD_RANGE', payload: isInRange });
    validatorPasswordDispatch({ type: 'SET_VALIDATE_PASSWORD_ADJACENT', payload: isAdjacent });
    validatorPasswordDispatch({ type: 'SET_VALIDATE_PASSWORD_CRESCENT', payload: isCrescent });
  }, [value]);

  return {
    validatorPasswordState,
  }
}