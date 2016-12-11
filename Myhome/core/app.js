function Application() {
    this.flat = new Flat([
        new Office(),
        new Kitchen(),
        new LivingRoom()
    ]);
}

Application.prototype.start = function() {
    this.flat.showPower();
    this.flat.getRoom("Office").showPower();
}

var app = new Application();
app.start();