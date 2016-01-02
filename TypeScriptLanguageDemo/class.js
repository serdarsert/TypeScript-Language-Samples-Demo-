var Human = (function () {
    function Human() {
    }
    Human.prototype.setFirstName = function (value) {
        this.firstName = value;
    };
    Human.prototype.setLastName = function (value) {
        this.lastName = value;
    };
    Human.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Object.defineProperty(Human.prototype, "FirstName", {
        get: function () {
            return this.firstName;
        },
        set: function (name) {
            this.firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "LastName", {
        get: function () {
            return this.lastName;
        },
        set: function (name) {
            this.lastName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "FullName", {
        get: function () {
            return this.getFullName();
        },
        enumerable: true,
        configurable: true
    });
    return Human;
})();
//# sourceMappingURL=class.js.map