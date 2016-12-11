function Office() {
    Rooms.call(this, "Office",
    [new Tablet(),
     new Desktop(),
     new Router()]
    );
}

Office.prototype = Object.create(Rooms.prototype);