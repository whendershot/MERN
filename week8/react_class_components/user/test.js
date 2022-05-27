const User = require("./User.class");

const one = new User("John");
const two = new User("Mary");
const three = new User("Sue");

one.makeDeposit(150).makeDeposit(150).makeDeposit(25).makeWithdrawal(33).displayBalance();
two.makeDeposit(150).makeDeposit(150).makeWithdrawal(25).makeWithdrawal(33).displayBalance();
three.makeDeposit(150).makeWithdrawal(150).makeWithdrawal(25).makeWithdrawal(33).displayBalance();

one.transferMoney(three, 100).displayBalance();
three.displayBalance();