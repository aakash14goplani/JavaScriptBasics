/* => https://airbrake.io/blog/javascript-error-handling/referenceerror-x-is-not-defined
The Undefined Variable error is thrown when a reference to a variable or object is made in code 
that either doesn’t exist, or is outside the scope of the executing code.

1. All JavaScript error objects are descendants of the Error object, or an inherited object therein.
2. The ReferenceError object is inherited from the Error object.
3. The Undefined Variable error is a specific type of ReferenceError object.
*/

/*
-- Error thrown when a variable/function is referenced that is not defined --
console.log("ReferenceError => " + a);
console.log("ReferenceError => " + abc());

-- since var is declared but not initialized it will throw undefined  --
var a;
console.log("ReferenceError => " + a);
function abc() {}
console.log("ReferenceError => " + abc());

-- since var is out of scope it will throw Reference Error --
var abc = "abc";
function innerScope() {
    console.log("Parent variable in innerScope: " + abc);
    var pqr = "pqr";
    xyz = "xyz";
    return "1";
}
console.log("Can access abc: " + abc);
console.log("Can access innerScope function: " + innerScope());
console.log("Can access innerScope global variable: " + xyz + ", window.xyz: " + window.xyz);
console.log("Cannot access innerScope variable: " + pqr);
*/

var FOO = function() {
    var my_var = 10; //shared variable available only inside your module

    function bar() { // this function not available outside your module
        alert(my_var); // this function can access my_var
    }

    return {
        a_func: function() {
            alert(my_var); // this function can access my_var
        },
        b_func: function() {
            alert(my_var); // this function can also access my_var
        }
    };

};
console.log("Can access abc: " + FOO().bar());
