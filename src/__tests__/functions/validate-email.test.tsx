import { describe, expect, it } from "vitest";
import { validateEmail } from "../../utils/validator/email";

import { emailsWithSpaces, invalidEmails, validEmails } from "./mock/emails";

describe('Fucntion Validate Email with regex', () => {
  it('should return true for valid emails', () => {
    validEmails.forEach(email => {
      expect(validateEmail(email)).toBe(true);
    })
  })

  it('should return false for invalid emails', () => {
    invalidEmails.forEach(email => {
      expect(validateEmail(email)).toBe(false);
    });
  });

  it('should return false for emails with spaces', () => {
    emailsWithSpaces.forEach(email => {
      expect(validateEmail(email)).toBe(false);
    });
  });

  it('should throw an error if the email is an empty string', () => {
    expect(() => validateEmail('')).toThrowError('Necessário um email para a validação')
  });
})