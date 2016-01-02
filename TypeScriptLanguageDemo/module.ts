module CarProject {
    export class App {
        public static start(): void {
            var carFromBase = new Bases.Car("Audi", "A3", 2013, Bases.Enums.Color.White);
            var huseyinsAudi = new Cars.Audi("A3", 2013, Bases.Enums.Color.White);

            Cars.Audi.printCars(huseyinsAudi, huseyinsAudi, huseyinsAudi, huseyinsAudi, huseyinsAudi, huseyinsAudi);
        }
    }
}

module CarProject.Bases.Enums {
    export enum Color {
        White,
        Black,
        Gray,
        Red,
        Pink
    }
}

module CarProject.Bases {
    export class Car {
        brand: string;
        model: string;
        year: number;
        color: Enums.Color;
        protected x: string;

        constructor(brand: string, model: string, year: number, color: Enums.Color) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.color = color;

            console.log("Car created! Details : ", this);
            this.printDetail();


        }

        printDetail() {
            console.log("Car created! Details : \n" +
                "Brand : " + this.brand + "\n" +
                "Model : " + this.model + "\n" +
                "Year : " + this.year + "\n" +
                "Color : " + Bases.Enums.Color[this.color]);
        }

        printDetailWithStringTemplate() {
            console.log(`Car created! Details : 
                        Brand : ${this.brand}
                        Model : ${this.model}
                        Year : ${this.year}
                        Color : ${Bases.Enums.Color[this.color]}`);
        }

        public static printCars(car1: Bases.Car, car2: Bases.Car, ...others: Array<Bases.Car>) {
            console.log(car1);
            console.log(car2);
            console.log(others);
        }

    }
}

module CarProject.Cars {
    export class Audi extends Bases.Car {
        constructor(model: string, year: number, color: Bases.Enums.Color) {
            super("Audi", model, year, color);
            this.x = "";
        }
    }
}

CarProject.App.start();



        