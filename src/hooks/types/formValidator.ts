import { MessageVariantsTypes } from "../../components/Message/interface";

export interface IFormDataState {
  name: string,
  email: string,
  password: string,
}

export interface IResponseStatus {
  message: string,
  variant: MessageVariantsTypes
}

export interface FormValidator {
  formData: IFormDataState,
  responseStatus: IResponseStatus,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  loading: boolean,
  isFormValid: boolean,
}