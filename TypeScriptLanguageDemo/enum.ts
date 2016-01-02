enum CurrencyEnum {
    TL,
    EURO,
    DOLLAR
}

var currencyCode = CurrencyEnum.EURO;

console.log("currencyCode :" + currencyCode);

console.log("CurrencyEnum[currencyCode] :" + CurrencyEnum[currencyCode]);
if (currencyCode == CurrencyEnum.EURO) {
    console.log("currencyCode is euro");
}
else {
    console.log("currencyCode is not euro");
}