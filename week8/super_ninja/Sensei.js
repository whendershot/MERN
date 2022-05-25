const Ninja = require("./Ninja");

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health || 200, speed || 10, strength || 10);
        this.wisdom = wisdom || 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
};

module.exports = Sensei;