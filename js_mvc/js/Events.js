function Event() {
    this.listeners = [];
}

Event.prototype.subscribe = function (liter) {
    this.listeners.push(liter);
}

Event.prototype.notify = function (data) {
    for (var i = 0; i < this.listeners.length; i++) {
        this.listeners[i](data);
    }
}