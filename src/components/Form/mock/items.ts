import { ValidatorPasswordTypes } from "../../../types/reducers/validatorPassword";


export interface ItemsPasswordCriteria {
  id: number,
  type: ValidatorPasswordTypes,
  text: string,
}

export const passwordCriteria: ItemsPasswordCriteria[] = [
  {
    id: 1,
    type: 'passwordLength',
    text: 'Senha deve conter 6 dígitos.',
  },
  {
    id: 2,
    type: 'passwordAdjacent',
    text: 'Senha deve conter 2 dígitos adjacentes iguais',
  },
  {
    id: 3,
    type: 'passwordCrescent',
    text: 'Senha deve conter dígitos numa sequencia crescente ou de mesmo valor',
  },
  {
    id: 4,
    type: 'passwordRange',
    text: 'Senha deve estar entre os números 184759 e 856920',
  }
];