class Arrays {
    static main() {
        var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
        var nums = new Array<number>();
        
        console.warn("*** for in ***");
        for (var n in numbers) {
            console.log(n);
        }

        console.warn("*** for of ***");
        for (n of numbers) {
            console.log(n);
        }

        console.warn("*** forEach ***");
        numbers.forEach(n=> console.log(n));


        console.warn("*** filteredNumbers ***");
        var filteredNumbers = numbers.filter(n => n % 3 == 0);
        filteredNumbers.forEach(fn=> console.log(fn));
    }
}

//Arrays.main();