BankAccount = require("./BankAccount.class");

const one = new BankAccount(0.1, 200);
const two = new BankAccount(-0.5, -100);

one.displayAccountInfo();
two.displayAccountInfo();

one.deposit(100).deposit(100).deposit(100).withdraw(37).yieldInterest().displayAccountInfo();
two.deposit(200).deposit(200).withdraw(55).withdraw(55).yieldInterest().displayAccountInfo();