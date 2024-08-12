import { useState } from "react"

import { fetchData } from "../http/fetch";

import { validateEmail } from "../utils/validator/email";

import { FormValidator, IFormDataState, IResponseStatus } from "./types/formValidator";

export const useFormValidator = (): FormValidator => {
  const [formData, setFormData] = useState<IFormDataState>({
    name: "",
    email: "",
    password: "",
  });

  const [responseStatus, setResponseStatus] = useState<IResponseStatus>({
    message: '',
    variant: null
  });

  const [loading, setLoading] = useState<boolean>(false);

  const isFormValid =
    formData.name.trim() !== ""
    && (formData.email.trim() !== "" && validateEmail(formData.email))
    && (formData.password.trim() !== "" && formData.password.length === 6);

  const handleSendData = async () => {

    if (!isFormValid) return;

    setLoading(true);

    try {
      const { status } = await fetchData({
        method: 'POST',
        urlBase: 'https://zbra-frontend-challenge.azurewebsites.net/api/PasswordValidation',
        body: formData,
      });

      if (status >= 200 && status <= 299) {
        setResponseStatus({ message: 'Formulário enviado com sucesso!', variant: "success" });
      }
    } catch {
      setResponseStatus({ message: 'Falha ao enviar o formulário. Tente Novamente', variant: "error" });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setResponseStatus({ message: '', variant: null })
      }, 3500)

      setFormData({
        email: '',
        name: '',
        password: ''
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const processedValue = name === 'password' ? value.replace(/[^0-9]/g, '') : value;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: processedValue
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSendData();
  };

  return {
    handleSubmit,
    handleInputChange,
    formData,
    responseStatus,
    loading,
    isFormValid,
  }
}