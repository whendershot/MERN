const User = require("./User.class");
const BankAccount = require("../bankAccount/BankAccount.class");

const one = new User("John");
const two = new User("Mary");
const three = new User("Sue");

one.displayBalance();
one.makeDeposit(150).makeDeposit(150).makeDeposit(25).makeWithdrawal(33).displayBalance();
two.makeDeposit(150).makeDeposit(150).makeWithdrawal(25).makeWithdrawal(33).displayBalance();
three.makeDeposit(150).makeWithdrawal(100).makeWithdrawal(25).makeWithdrawal(33).displayBalance();

one.transferMoney(three, 100).displayBalance();
three.displayBalance();

const accountArr = [new BankAccount(), new BankAccount(), new BankAccount(), new BankAccount()];
const four = new User(name="William", accounts=accountArr);

four.displayBalance();
four.makeDeposit(150, 0).makeDeposit(125, 1).makeDeposit(-1000, 2).makeDeposit(231,3).displayBalance();