"use strict";

class Test {
    //creating objects
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //creating methods
    color(favcolor) {
        console.log(favcolor);
    }
}

var test_var_1 = new Test(1, "One");
console.log(test_var_1);
test_var_1.color("red");