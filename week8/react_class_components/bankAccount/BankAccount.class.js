class BankAccount {
    constructor(intRate, balance) {
        this._balance = balance > 0 ? balance : 0;
        this._intRate = intRate > 0 ? intRate : 0.0;
    }

    deposit(amount) {
        amount > 0 ? this._balance += amount : null;
        return this;
    };

    withdraw(amount) {
        if (this._balance > 0) {
            if (this._balance - amount < 0) {
                console.log("Insuffficient funds: Charging a $5 fee.");
                this._balance -= (amount + 5);
            } else {
                this._balance -= amount;
            }
        }
        return this;
    };

    displayAccountInfo() {
        console.log(this.toString());
        return this;
    };

    yieldInterest() {
        if (this._balance > 0) {
            this._balance = (1 + this._intRate) * this._balance;
        }
        return this;
    };

    toString () {
        return `Balance: $${this._balance}`
    };
};

module.exports = BankAccount;