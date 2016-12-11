function Kitchen() {
    Rooms.call(this, "Kitchen",
    [new TV(),
     new Microwave()]
    );
}

Kitchen.prototype = Object.create(Rooms.prototype);