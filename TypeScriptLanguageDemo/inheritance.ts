class Conference {
    private static MAX_TICKETS = 1000

    public speakers: Array<string>;
    public tickets: number;

    constructor(speakers: Array<string>, tickets: number) {
        if (tickets > Conference.MAX_TICKETS) {
            throw new Error("Too many tickets!")
        }
        else {
            this.speakers = speakers;
            this.tickets = tickets;
        }
    }

    buyTicket(count: number) {
        if (count <= this.tickets) {
            this.tickets -= count;
        } else {
            throw new Error("Not enough tickets!");
        }

    }

}

class MSConnect extends Conference {
    public dotNetVersion: string;
    constructor(speakers: Array<string>, tickets: number, dotNetVersion: string) {
        super(speakers, tickets);
    }

    buyTicket(count: number) {
        if (count % 2 == 1) {
            throw new Error("Should come in pairs")
        }
        super.buyTicket(count);
    }
}


