function Device(name, components) {
    this.components = components;
    this.turn = false;
    Component.call(this, name, this.getPower());
}

Device.prototype = Object.create(Component.prototype);

Device.prototype.getPower = function() {
    var power = 0;
    this.components.forEach(function(item) {
        power += item.getPower();
    }, this);
    return power;
}

Device.prototype.showPower = function() {
    if (this.turn)
        console.log(this.name + " power: " + this.power);
    else
        console.log(this.name + " is turnOff");
}