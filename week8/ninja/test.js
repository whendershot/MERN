const Ninja = require("./Ninja");


const one = new Ninja("Hyabusa", 100);

one.sayName();
one.showStats();
one.drinkSake();
one.showStats();

const two = new Ninja("William", 200, 50, 50);
two.sayName();
two.showStats();
two.drinkSake();
two.drinkSake();
two.showStats();