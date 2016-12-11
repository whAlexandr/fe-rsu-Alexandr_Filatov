function LivingRoom() {
    Rooms.call(this, "Living Room",
    [new TV(),
     new Tablet(),
     new PS()]
    );
}

LivingRoom.prototype = Object.create(Rooms.prototype);