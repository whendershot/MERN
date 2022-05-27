const BankAccount = require("../bankAccount/BankAccount.class");

class User{
    constructor(name, accounts) {
        this._name = name;
        this._accounts = accounts ? accounts : [new BankAccount()];
    };

    makeDeposit(amount, accountId) {
        this._accounts[(accountId || 0)].deposit(amount);
        return this;
    };

    makeWithdrawal(amount, accountId) {
        this._accounts[(accountId || 0)].withdraw(amount);
        return this;
    };

    displayBalance() {
        console.log(`User: ${this._name}, Balances:`);
        this._accounts.map((account)=>account.displayAccountInfo());
        return this;
    };

    transferMoney(otherUser, amount, fromAccountId, toAccountId) {
        this.makeWithdrawal(amount, fromAccountId);
        otherUser.makeDeposit(amount, toAccountId);
        return this;
    };

    openAccount(intRate, initialBalance) {
        this._accounts.push
    }
};

module.exports = User;