function Notebook() {
    Device.call(this, "Notebook", 
        [new CPU(10),
         new Flash(7),
         new Screen(27),
        new Peripherals(15)
        ]
    );
}

Notebook.prototype = Object.create(Device.prototype);