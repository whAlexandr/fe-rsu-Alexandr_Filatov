function Tablet() {
    Device.call(this, "Tablet",
        [new Screen(27),
         new CPU(8)
        ]
    );
}

Tablet.prototype = Object.create(Device.prototype);