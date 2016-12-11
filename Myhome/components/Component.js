function Component(name, power) {
    this.name = name;
    this.power = power;
    this.turn = true;
}

Component.prototype.getName = function() {
    return this.name;
}

Component.prototype.getPower = function() {
    return this.power;
}

Component.prototype.turnOn = function() {
    this.turn = true;
}

Component.prototype.turnOff = function() {
    this.turn = false;
}