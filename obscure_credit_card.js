// Requirements: TDD - create tests for a module that will:
// obscure credit card number except the last 4 digits
// Test make sure the function obscures credit card numbers that are between
// the length of 12 and 16 digits:
// input: 123456789012
// Output: ********9012
// Test

function obscure_credit_card(card_number) {
    // Remove dashes and spaces from the card number
    const cleanedCardNumber = card_number.replace(/[-\s]/g, "");

    if (!(12 <= cleanedCardNumber.length && cleanedCardNumber.length <= 16)) {
        return "Invalid Credit Card";
    }
    const obscuredDigits = cleanedCardNumber.slice(0, -4).replace(/\d/g, "*");
    const lastFourDigits = cleanedCardNumber.slice(-4);
    return obscuredDigits + lastFourDigits;
}

module.exports = obscure_credit_card;


