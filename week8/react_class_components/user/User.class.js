class User{
    constructor(name) {
        this._name = name;
        this._accountBalance = 0;
    };

    makeDeposit(amount) {
        this._accountBalance += amount;
        return this;
    };

    makeWithdrawal(amount) {
        this._accountBalance -= amount;
        return this;
    };

    displayBalance() {
        console.log(`User: ${this._name}, Balance: $${this._accountBalance}`);
        return this;
    };

    transferMoney(otherUser, amount) {
        this.makeWithdrawal(amount);
        otherUser.makeDeposit(amount);
        return this;
    };
};

module.exports = User;