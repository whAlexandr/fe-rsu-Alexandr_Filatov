function PS() {
    Device.call(this, "PS",
        [new CPU(20),
         new Peripherals(10),
         new Flash(30)]
    );
}

PS.prototype = Object.create(Device.prototype);