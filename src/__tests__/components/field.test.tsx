import { expect, describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { Field } from '../../components/Field';

const fieldTestId = 'field';
const fieldInputTestId = 'field__input';
const fieldLabelTestId = 'field__label';
const fieldWarnTestId = 'field__warn';

describe('Component Field', () => {
  it('should be able render the field', () => {
    const { getByTestId } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input />
      </Field.Root>
    );

    expect(getByTestId(fieldTestId)).toBeInTheDocument();
  })

  it('should be able to see a label', () => {
    const { getByTestId } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input />
      </Field.Root>
    );

    const label = getByTestId(fieldLabelTestId)

    expect(label).toBeInTheDocument();

    expect(label).toHaveTextContent('Nome');
  })

  it('should be able to see a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input placeholder='Escreva o seu nome' />
      </Field.Root>
    );

    const input = getByPlaceholderText('Escreva o seu nome');

    expect(input).toBeInTheDocument();
  })

  it('should be able update the value when typing in the input', () => {
    const { getByTestId } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input placeholder='Escreva o seu nome' />
      </Field.Root>
    );

    const input = getByTestId(fieldInputTestId) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Larissa Dantier' } });

    expect(input.value).toBe('Larissa Dantier');
  })

  it('should be able to see a focus using table or click', () => {
    const { getByTestId } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input placeholder='Escreva o seu nome' />
      </Field.Root>
    )

    const input = getByTestId(fieldInputTestId)

    input.focus()

    expect(input).toHaveFocus()
  })

  it('should be able to see a warn for error input', () => {
    const { getByTestId } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input placeholder='Escreva o seu nome' />

        <Field.Warn>Preencha o campo de nome</Field.Warn>
      </Field.Root>
    )

    const warn = getByTestId(fieldWarnTestId);

    expect(warn).toBeInTheDocument();
    expect(warn).toHaveTextContent('Preencha o campo de nome');
  })

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Field.Root>
        <Field.Label>Nome</Field.Label>
        <Field.Input placeholder='Escreva o seu nome' />

        <Field.Warn>Preencha o campo de nome</Field.Warn>
      </Field.Root>
    );

    expect(asFragment()).toMatchSnapshot();
  });
})