var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Conference = (function () {
    function Conference(speakers, tickets) {
        if (tickets > Conference.MAX_TICKETS) {
            throw new Error("Too many tickets!");
        }
        else {
            this.speakers = speakers;
            this.tickets = tickets;
        }
    }
    Conference.prototype.buyTicket = function (count) {
        if (count <= this.tickets) {
            this.tickets -= count;
        }
        else {
            throw new Error("Not enough tickets!");
        }
    };
    Conference.MAX_TICKETS = 1000;
    return Conference;
})();
var MSConnect = (function (_super) {
    __extends(MSConnect, _super);
    function MSConnect(speakers, tickets, dotNetVersion) {
        _super.call(this, speakers, tickets);
    }
    MSConnect.prototype.buyTicket = function (count) {
        if (count % 2 == 1) {
            throw new Error("Should come in pairs");
        }
        _super.prototype.buyTicket.call(this, count);
    };
    return MSConnect;
})(Conference);
//# sourceMappingURL=inheritance.js.map