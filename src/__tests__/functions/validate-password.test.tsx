import { describe, expect, it } from "vitest";

import { hasNumbersAdjancents, hasNumbersIsCrescent } from "../../utils/validator/password";

describe('Fucntion Validate Password', () => {

  describe('Function hasNumbersAdjacent', () => {
    it('should return true for numbers that have adjacent duplicates', () => {
      expect(hasNumbersAdjancents('122345')).toBe(true)
    })

    it('should return true for numbers that have any adjacents', () => {
      expect(hasNumbersAdjancents('122234')).toBe(true)
    })

    it('should return false for numbers without adjacent duplicates', () => {
      expect(hasNumbersAdjancents('123456')).toBe(false)
    });

    it('should throw an error if the value is an empty string', () => {
      expect(() => hasNumbersAdjancents('')).toThrowError('Necessário o valor para a validação')
    });
  })

  describe('Function hasNumbersConsecutive', () => {
    it('should return true for numbers that are in consecutive order', () => {
      expect(hasNumbersIsCrescent('123456')).toBe(true)
    });

    it('should return false for numbers that are not in consecutive order', () => {
      expect(hasNumbersIsCrescent('123454')).toBe(false)
    });

    it('should throw an error if the value is an empty string', () => {
      expect(() => hasNumbersIsCrescent('')).toThrowError('Necessário o valor para a validação')
    });
  })
})