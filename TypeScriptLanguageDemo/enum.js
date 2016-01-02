var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum[CurrencyEnum["TL"] = 0] = "TL";
    CurrencyEnum[CurrencyEnum["EURO"] = 1] = "EURO";
    CurrencyEnum[CurrencyEnum["DOLLAR"] = 2] = "DOLLAR";
})(CurrencyEnum || (CurrencyEnum = {}));
var currencyCode = CurrencyEnum.EURO;
console.log("currencyCode :" + currencyCode);
console.log("CurrencyEnum[currencyCode] :" + CurrencyEnum[currencyCode]);
if (currencyCode == CurrencyEnum.EURO) {
    console.log("currencyCode is euro");
}
else {
    console.log("currencyCode is not euro");
}
//# sourceMappingURL=enum.js.map