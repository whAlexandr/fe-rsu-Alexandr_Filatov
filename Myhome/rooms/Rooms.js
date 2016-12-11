function Rooms(name, devices) {
    this.name = name;
    this.devices = devices;
    this.power = this.getPower();
}

Rooms.prototype.getPower = function() {
    var power = 0;
    this.devices.forEach(function(item) {
        if (item.turn) {
            power += item.getPower();
        }
    }, this);
    return power;
}

Rooms.prototype.showPower = function() {
    console.log(this.name + " Power is: " + this.power);
}

Rooms.prototype.getDevice = function(name) {
    for (var i = 0; i < this.devices.length; i++)
        if (this.devices[i].name === name) 
            return this.devices[i];
    return null;
}