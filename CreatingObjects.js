// creating objects using literal

var house = {
    name: "Home Sweet Home",
    address: "Mumbai"
};
//accessing object
console.log("Name: " + house.name + ", house[\"name\"] " + house["name"]);
console.log("Address: " + house.address + ", house[\'address\'] " + house['address']);

//adding property on fly
house.owership = "self";
console.log("Ownership (self/rented): " , house.owership);

/*illegal js identifier => any property name that is not a valid JavaScript identifier 
(for example, a property name that has a space or a hyphen, or that starts with a number) 
can only be accessed using the square bracket notation

If the property name is stored in some variable or created through some expression, 
then you have to use bracket notation:*/
house['num+ber'] = "104";
console.log("House Number: " , house['num+ber']);

var name1 = 'propertyName';
// the property will be `name`, not `propertyName`
var obj = {
    name1: 42
}; 
// same here
obj.name1 = 42;
console.log(obj.name1 , " ", obj);
// this works, it will set `propertyName`
obj[name1] = 42;
console.log(obj);

//adding functions to object
house.price = function(area) {
    //calculates price based on input area
    if(area > 0)
        return Math.round(Math.random() * area);
    else
        return Math.round(Math.random() * 1024);
};
console.log("Total cost of house: " , house.price() + " , " + house.price(1354));

//looping through object properties
var result = "";
for (var i in house) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (house.hasOwnProperty(i)) {
      result += "house" + '.' + i + ' = ' + house[i] + '\n';
        console.log("[" + i + ", " + result + "]");
    }
}
//return all properties of object
console.log("Object: " , Object.getOwnPropertyNames(house));

/* Object Literals: in a nutshell
var house = {
    name: "Home Sweet Home",
    address: "Mumbai",
    owership: "self",
    price: function(area){
        if(area > 0)
            return Math.round(Math.random() * area);
        else
            return Math.round(Math.random() * 1024);
    }
}
*/

/* ------------------------------------------------------------------------------------- */

//creating objects using constructor

function Car(carName) {
    this.carName = carName;
}
function House(name, address, owership, area, Car) {
    this.name = name;
    this.address = address;
    this.owership = owership;
    this.price = function(area){
        if(area > 0)
            return Math.round(Math.random() * area);
        else
            return Math.round(Math.random() * 1024);
    };
    this.Car = Car; //passing object to the object
}

var auto = new Car("Auto");
var brothersHouse = new House("House 2", "Mumbai", "Rental", 1024, auto);
console.log("--------------Brothers House--------------");
console.log(brothersHouse.name + " " + brothersHouse.address + " " + brothersHouse.price(1024) + 
" " + brothersHouse.owership + " " + brothersHouse.Car.carName);

var honda = new Car("Honda");
var sistersHouse = new House("House 3", "Mumbai", "Self", 980, honda);
console.log("--------------Sisters House--------------");
console.log(sistersHouse.name + " " + sistersHouse.address + " " + sistersHouse.price(1024) + 
" " + sistersHouse.owership + " " + sistersHouse.Car.carName);

console.log("Brothers House: " , brothersHouse);
console.log("Sisters House: " , sistersHouse);
console.log("House: " , House);
console.log("house: " , house);

/* ------------------------------------------------------------------------------------- */

//creating objects using Object.create

var Student = {
    name: "Aakash",
    id: "1234",
    age: "23",
    subjects: function(){
        var subjectList = ["Language 1", "Language 2", "Language 3", "Science & Technology",
            "History & Civics", "Geography", "Commerce & Economics"];
        return subjectList;      
    }
};
var student_1 = Object.create(Student);
console.log("--------------Students Details--------------");
console.log("Student Name: " + student_1.name);
console.log("Student Id: " + student_1.id);
console.log("Student Age: " + student_1.age);
console.log("Subjects: " + student_1.subjects());

/* ------------------------------------------------------------------------------------- */

//creating objects using new Object Instance

var NewObject = {}; //equivalent to var NewObject = new Object();
NewObject.firstname = "fname";
NewObject.lastname = "lname";
NewObject['age'] = 55;
NewObject['eyecolor'] = "eyecolor";
console.log("New Object: " , NewObject);
console.log("New Object Details: " + NewObject.firstname + " " + NewObject.lastname + " " + 
NewObject.age + " " + NewObject['eyecolor']);

/* ------------------------------------------------------------------------------------- 

There is various way to define a function. It is totally based upon your requirement. 
Below are the few styles :-*/

//Object constructor
var person = new Object();

person.name = "Anand",
person.getName = function(){
  return this.name ; 
};

//Literal constructor
var person = { 
  name : "Anand",
  getName : function (){
   return this.name;
  } 
};

//function Constructor
function Person(name){
  this.name = name;
  this.getName = function(){
    return this.name;
  };
} 

//Prototype
function Person(){}

Person.prototype.name = "Anand";

//Function/Prototype combination
function Person(name){
  this.name = name;
} 
Person.prototype.getName = function(){
  return this.name;
};

//Singleton
var person = new function(){
  this.name = "Anand";
}; 


var objectliteral = {
    func1: function(){ return "1"; },
    func2: function(){ return "2"; },
    func3: function(){ return "3"; }
};
console.log("objectliteral['func1']() => " + objectliteral['func1']() + " , " , objectliteral);
var myfuncname='function1';
objectliteral[myfuncname] = function(){ return "4"; };
console.log("objectliteral[myfuncname](); => " , objectliteral[myfuncname]() + " , " , objectliteral);