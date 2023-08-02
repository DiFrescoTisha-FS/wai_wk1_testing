const obscure_credit_card = require('./obscure_credit_card')

describe('obscure_credit_card function tests', () => {
    test('should obscure valid credit card number', () => {
        expect(obscure_credit_card("123456789012")).toBe("********9012");
    });

    test('should obscure valid credit card number with dashes', () => {
        expect(obscure_credit_card("1234-5678-9012-3456")).toBe("************3456");
    });

    test('should obscure valid credit card number with spaces', () => {
        expect(obscure_credit_card("1234 5678 9012 3456")).toBe("************3456");
    });

    test('should obscure valid credit card number with dashes', () => {
        const actual = obscure_credit_card("1234-5678-9012-3456");
        expect(actual).toBe("************3456");
    });
    
    test('should obscure valid credit card number with spaces', () => {
        const actual = obscure_credit_card("1234 5678 9012 3456");
        expect(actual).toBe("************3456");
    });
});

describe('obscure_credit_card function negative tests', () => {
    test('should return "Invalid Credit Card" for short credit card number', () => {
      expect(obscure_credit_card("1234567890")).toBe("Invalid Credit Card");
    });
  
    test('should return "Invalid Credit Card" for long credit card number', () => {
      expect(obscure_credit_card("12345678901234567890")).toBe("Invalid Credit Card");
    });
  
    test('should return "Invalid Credit Card" for invalid credit card number format', () => {
      expect(obscure_credit_card("12-34 56_789-01,23_4-56")).toBe("Invalid Credit Card");
    });
  });
