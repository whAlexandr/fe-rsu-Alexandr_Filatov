function Microwave() {
    Device.call(this, "Microwave", 
        [new CPU(5),
        new Screen(7)]
    );
}

Microwave.prototype = Object.create(Device.prototype);