class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }

    sayName() {
        console.log("My name is " + this.name);
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this.health += 10;
    }
}