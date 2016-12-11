function TV() {
    Device.call(this, "TV", 
        [new Screen(50),
         new CPU(5),
         new Peripherals(5)]
    );
}

TV.prototype = Object.create(Device.prototype);