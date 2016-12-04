//1
"use strict" ;

var Calculator = function() {
     this.resultat = 0;

};

Calculator.prototype = {

    GetResult: function (x) {
    return this.resultat;
    },
    add: function (x) {
        this.resultat += x;
        return this;
    },
    subtract: function (y) {
        this.resultat-=y;
        return this;
    },
    divide:function (z) {
            this.resultat/=z;
        return this;
    },
    multiply:function (t) {
        this.resultat *= t;
        return this;
    },
    getInitialState:function(){setTimeout((function() {
    console.log( this.Result );
    return this;
}),1000)
    return this;
}


};



var calc = new Calculator();

console.log(calc.GetResult());
calc.add(2).divide(2);
console.log(calc.GetResult());
calc.getInitialState();
console.log(calc.GetResult());
