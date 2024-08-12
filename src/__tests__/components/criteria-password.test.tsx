import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { CriteriaPassword } from "../../components/CriteriaPassword";

const criteriaPasswordListTestId = 'validator__list';
const criteriaPasswordItemTestId = 'validator__item';
const criteriaPasswordTitleTestId = 'validator__title';
const criteriaPasswordTextTestId = 'validator__text';

describe('Component CriteriaPassword', () => {
  it('should be able render the list', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Item>
          <CriteriaPassword.Text>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>
    )

    expect(getByTestId(criteriaPasswordListTestId)).toBeInTheDocument()
  })

  it('should be able render title', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Title>Titulo</CriteriaPassword.Title>

        <CriteriaPassword.Item>
          <CriteriaPassword.Text>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>
    )

    expect(getByTestId(criteriaPasswordTitleTestId)).toHaveTextContent('Titulo')
  })

  it('should be able render the item', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Item>
          <CriteriaPassword.Text>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>
    )

    expect(getByTestId(criteriaPasswordItemTestId)).toHaveTextContent('Item 1')
  })

  it('should be able text have a valid item', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Item>
          <CriteriaPassword.Text valid>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>)

    expect(getByTestId(criteriaPasswordTextTestId).className).toMatch(/validator--valid/);
  })

  it('should be able text have a not valid item', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Item>
          <CriteriaPassword.Text>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>)

    expect(getByTestId(criteriaPasswordTextTestId).className).toMatch(/validator--invalid/);
  })

  it('should be able title have a valid', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Title>Titulo</CriteriaPassword.Title>

        <CriteriaPassword.Item>
          <CriteriaPassword.Text valid>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>)

    expect(getByTestId(criteriaPasswordTextTestId).className).toMatch(/validator--valid/);
  })

  it('should be able title have a not valid', () => {
    const { getByTestId } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Title>Titulo</CriteriaPassword.Title>

        <CriteriaPassword.Item>
          <CriteriaPassword.Text>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>)

    expect(getByTestId(criteriaPasswordTextTestId).className).toMatch(/validator--invalid/);
  })

  it('should match snapshot', () => {
    const { asFragment } = render(
      <CriteriaPassword.List>
        <CriteriaPassword.Item>
          <CriteriaPassword.Text>Item 1</CriteriaPassword.Text>
        </CriteriaPassword.Item>
      </CriteriaPassword.List>
    );

    expect(asFragment()).toMatchSnapshot();
  });
})