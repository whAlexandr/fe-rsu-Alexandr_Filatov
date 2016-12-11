function Router() {
    Device.call(this, "Router", 
        [new Flash(8),
         new CPU(3)]
    );
}

Router.prototype = Object.create(Device.prototype);