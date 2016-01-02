var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CarProject;
(function (CarProject) {
    var App = (function () {
        function App() {
        }
        App.start = function () {
            var carFromBase = new CarProject.Bases.Car("Audi", "A3", 2013, CarProject.Bases.Enums.Color.White);
            var huseyinsAudi = new CarProject.Cars.Audi("A3", 2013, CarProject.Bases.Enums.Color.White);
            CarProject.Cars.Audi.printCars(huseyinsAudi, huseyinsAudi, huseyinsAudi, huseyinsAudi, huseyinsAudi, huseyinsAudi);
        };
        return App;
    })();
    CarProject.App = App;
})(CarProject || (CarProject = {}));
var CarProject;
(function (CarProject) {
    var Bases;
    (function (Bases) {
        var Enums;
        (function (Enums) {
            (function (Color) {
                Color[Color["White"] = 0] = "White";
                Color[Color["Black"] = 1] = "Black";
                Color[Color["Gray"] = 2] = "Gray";
                Color[Color["Red"] = 3] = "Red";
                Color[Color["Pink"] = 4] = "Pink";
            })(Enums.Color || (Enums.Color = {}));
            var Color = Enums.Color;
        })(Enums = Bases.Enums || (Bases.Enums = {}));
    })(Bases = CarProject.Bases || (CarProject.Bases = {}));
})(CarProject || (CarProject = {}));
var CarProject;
(function (CarProject) {
    var Bases;
    (function (Bases) {
        var Car = (function () {
            function Car(brand, model, year, color) {
                this.brand = brand;
                this.model = model;
                this.year = year;
                this.color = color;
                console.log("Car created! Details : ", this);
                this.printDetail();
            }
            Car.prototype.printDetail = function () {
                console.log("Car created! Details : \n" +
                    "Brand : " + this.brand + "\n" +
                    "Model : " + this.model + "\n" +
                    "Year : " + this.year + "\n" +
                    "Color : " + Bases.Enums.Color[this.color]);
            };
            Car.prototype.printDetailWithStringTemplate = function () {
                console.log("Car created! Details : \n                        Brand : " + this.brand + "\n                        Model : " + this.model + "\n                        Year : " + this.year + "\n                        Color : " + Bases.Enums.Color[this.color]);
            };
            Car.printCars = function (car1, car2) {
                var others = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    others[_i - 2] = arguments[_i];
                }
                console.log(car1);
                console.log(car2);
                console.log(others);
            };
            return Car;
        })();
        Bases.Car = Car;
    })(Bases = CarProject.Bases || (CarProject.Bases = {}));
})(CarProject || (CarProject = {}));
var CarProject;
(function (CarProject) {
    var Cars;
    (function (Cars) {
        var Audi = (function (_super) {
            __extends(Audi, _super);
            function Audi(model, year, color) {
                _super.call(this, "Audi", model, year, color);
                this.x = "";
            }
            return Audi;
        })(CarProject.Bases.Car);
        Cars.Audi = Audi;
    })(Cars = CarProject.Cars || (CarProject.Cars = {}));
})(CarProject || (CarProject = {}));
CarProject.App.start();
//# sourceMappingURL=module.js.map