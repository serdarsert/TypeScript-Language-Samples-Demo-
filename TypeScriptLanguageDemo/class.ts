class Human {
    private firstName: string;
    private lastName: string;

    setFirstName(value: string) {
        this.firstName = value;
    }

    setLastName(value: string) {
        this.lastName = value;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
    get FirstName(): string {
        return this.firstName;
    }
    set FirstName(name) {
        this.firstName = name;
    }

    get LastName(): string {
        return this.lastName;
    }
    set LastName(name) {
        this.lastName = name;
    }

    get FullName(): string {
        return this.getFullName();
    }
}