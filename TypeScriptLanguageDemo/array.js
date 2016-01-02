var Arrays = (function () {
    function Arrays() {
    }
    Arrays.main = function () {
        var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        var nums = new Array();
        console.warn("*** for in ***");
        for (var n in numbers) {
            console.log(n);
        }
        console.warn("*** for of ***");
        for (var _i = 0; _i < numbers.length; _i++) {
            n = numbers[_i];
            console.log(n);
        }
        console.warn("*** forEach ***");
        numbers.forEach(function (n) { return console.log(n); });
        console.warn("*** filteredNumbers ***");
        var filteredNumbers = numbers.filter(function (n) { return n % 3 == 0; });
        filteredNumbers.forEach(function (fn) { return console.log(fn); });
    };
    return Arrays;
})();
//Arrays.main(); 
//# sourceMappingURL=array.js.map