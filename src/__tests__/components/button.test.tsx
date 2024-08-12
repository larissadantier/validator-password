import { expect, describe, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { Button } from '../../components/Button';

const buttonTestId = 'button';

describe('Component Button', () => {
  it('should be able render the button', () => {
    const { getByTestId } = render(
      <Button.Root>
        <Button.Text>Send</Button.Text>
      </Button.Root>
    )

    expect(getByTestId(buttonTestId)).toBeInTheDocument();
  })

  it('should be able user to click in button', () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button.Root onClick={handleClick}>
        <Button.Text>Send</Button.Text>
      </Button.Root>
    );

    fireEvent.click(getByTestId(buttonTestId));

    expect(handleClick).toHaveBeenCalled();
  })

  it('should be able user to focus', () => {
    const { getByTestId } = render(
      <Button.Root>
        <Button.Text>Send</Button.Text>
      </Button.Root>
    );

    const button = getByTestId(buttonTestId);

    button.focus();

    expect(button).toHaveFocus();
  })

  it('should be able not receive click when disabled', () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button.Root onClick={handleClick} disabled>
        <Button.Text>Send</Button.Text>
      </Button.Root>
    );
    const button = getByTestId('button');

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(
      <Button.Root>
        <Button.Text>Send</Button.Text>
      </Button.Root>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot of disabled', () => {
    const { asFragment } = render(
      <Button.Root disabled>
        <Button.Text>Send</Button.Text>
      </Button.Root>
    );

    expect(asFragment()).toMatchSnapshot();
  });
})