module.exports = function makeExchange(currency) {
    if (currency < 1) {
        return {};
    }

    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }

    const returnObject = {};
    const currencyValues = [50, 25, 10, 5, 1];
    const associativeCurrencyValue = {
        50: "H",
        25: "Q",
        10: "D",
        5: "N",
        1: "P"
    };

    currencyValues.reduce(function (balance, currencyValueItem) {
        if (currencyValueItem <= balance) {
            let piece = balance / currencyValueItem >> 0;
            let value = associativeCurrencyValue[currencyValueItem];
            returnObject[value] ? returnObject[value] += piece : returnObject[value] = piece;
            return balance - (currencyValueItem * piece);
        } else {
            return balance;
        }

    }, currency);

    return returnObject;
}
