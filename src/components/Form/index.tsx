import { useFormValidator } from '../../hooks/useFormValidator';
import { useValidatorPassword } from '../../hooks/useValidatorPassword';

import { Field } from '../../components/Field';
import Message from '../Message';
import { Button } from '../Button';
import { CriteriaPassword } from '../CriteriaPassword';

import { validateEmail } from '../../utils/validator/email';

import { passwordCriteria } from './mock/items';

import styles from './form.module.scss';

function Form() {
  const {
    handleSubmit,
    handleInputChange,
    formData,
    loading,
    responseStatus,
    isFormValid,
  } = useFormValidator();

  const { validatorPasswordState } = useValidatorPassword(formData.password)

  const isValidPassword = Object.values(validatorPasswordState).every(validator => validator === true)

  const messagePassword = isValidPassword ? 'Senha válida' : 'Senha inválida'

  return (
    <form className={styles['form__container']} onSubmit={handleSubmit}>
      <section className={styles['form__content']}>
        <header>
          <h1>Valide a sua senha</h1>
          <p className={styles['form__description']}>de acordo com os critérios de avaliação</p>
        </header>

        <div className={styles['form__fields']}>
          <Field.Root>
            <Field.Label htmlFor='name'>Nome</Field.Label>
            <Field.Input
              name='name'
              id="name"
              required
              value={formData.name}
              placeholder='Ex: Larissa Dantier'
              onChange={handleInputChange}
            />
            {formData.name === '' && <Field.Warn>Preencha o campo de nome</Field.Warn>}
          </Field.Root>

          <Field.Root>
            <Field.Label htmlFor='email'>Email</Field.Label>
            <Field.Input
              name='email'
              id="email"
              type='email'
              required
              value={formData.email}
              placeholder='Ex: lari@gmail.com'
              onChange={handleInputChange}
            />

            {formData.email === '' && <Field.Warn>Preencha o campo de e-mail</Field.Warn>}
            {formData.email && !validateEmail(formData.email) && <Field.Warn>E-mail inválido</Field.Warn>}
          </Field.Root>

          <Field.Root>
            <Field.Label htmlFor='password'>Senha</Field.Label>
            <Field.Input
              name='password'
              id="password"
              required
              value={formData.password}
              placeholder='Ex: 122345'
              type='text'
              inputMode='numeric'
              pattern='[0-9]+'
              maxLength={6}
              onChange={handleInputChange}
            />
            {formData.password === '' && <Field.Warn>Preencha o campo de senha</Field.Warn>}
          </Field.Root>
        </div>

        {formData.password && (
          <CriteriaPassword.List>
            <CriteriaPassword.Title valid={isValidPassword}>{messagePassword}</CriteriaPassword.Title>

            {!isValidPassword && passwordCriteria.map(item => (
              <CriteriaPassword.Item key={item.id}>
                <CriteriaPassword.Text valid={validatorPasswordState[item.type]}>
                  {item.text}
                </CriteriaPassword.Text>
              </CriteriaPassword.Item>
            ))}
          </CriteriaPassword.List>
        )}
      </section>

      <footer className={styles['form__footer']}>
        {responseStatus && (
          <Message variant={responseStatus.variant}>{responseStatus.message}</Message>
        )}

        <Button.Root
          className={styles['form__button']}
          type='submit'
          disabled={loading || !isFormValid || !isValidPassword}
        >
          <Button.Text>Enviar</Button.Text>
        </Button.Root>
      </footer>
    </form>
  );
}

export default Form;