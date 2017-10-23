// creating objects using literal
var house = {
    name: "Home Sweet Home",
    address: "Mumbai"
}
//accessing object
console.log("Name: " , house.name);
console.log("Address: " , house.address);
//adding property on fly
house.owership = "self";
console.log("Ownership (self/rented): " , house.owership);
//adding functions to object
house.price = function(area) {
    //calculates price based on input area
    if(area > 0)
        return Math.round(Math.random() * area);
    else
        return Math.round(Math.random() * 1024);
}
console.log("Total cost of house: " , house.price() + " , " + house.price(1354));