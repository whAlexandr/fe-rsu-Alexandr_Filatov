//1
"use strict" ;


var calculator = {
    Result: 0,
    add:function(a) {
         this.Result=this.Result+a;
        return this;
    },
    Subtract: function(b) {
   this.Result=this.Result-b;
        return this;
    },
    Divide:function(c) {
       this.Result=this.Result/c;
        return this;
    },
    Multiply:function(e) {
         this.Result=this.Result*e;
        return this;
    },
    reset:function() {
       this.Result=0;
        return this;
    },

    getResult: function(){setTimeout((function() {
		console.log( calculator.Result );
        return this;
    }),1000)
	return this;
	}
};




calculator.add(5).Subtract(10).Divide(2).Multiply(-10).getResult();


//setTimeout( function() {calculator.getResult() } , 1000);




