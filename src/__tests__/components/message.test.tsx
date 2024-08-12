import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Message from "../../components/Message";

const messageTestId = 'message';

describe('Component Message', () => {
  it('should be able render the message', () => {
    const { getByTestId } = render(<Message>Mensagem para o usuário</Message>)

    expect(getByTestId(messageTestId)).toBeInTheDocument()
  })

  it('should be able to see a text of message', () => {
    const { getByTestId } = render(<Message>Mensagem para o usuário</Message>)

    expect(getByTestId(messageTestId))
      .toHaveTextContent('Mensagem para o usuário')
  })

  it('should be able add a variant success', () => {
    const { getByTestId } = render(<Message variant={"success"}>Mensagem para o usuário</Message>)

    const messageElement = getByTestId(messageTestId);

    expect(messageElement.className).toMatch(/message--success/);
  })

  it('should be able add a variant error', () => {
    const { getByTestId } = render(<Message variant={"error"}>Mensagem para o usuário</Message>)

    const messageElement = getByTestId(messageTestId);

    expect(messageElement.className).toMatch(/message--error/);
  })
})