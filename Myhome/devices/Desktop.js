function Desktop() {
    Device.call(this, "Desktop", 
        [new CPU(20),
         new Flash(30),
         new Screen(20),
         new Peripherals(20) ]
    );
}

Desktop.prototype = Object.create(Device.prototype);