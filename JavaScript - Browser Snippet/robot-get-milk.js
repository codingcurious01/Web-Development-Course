// create the function - 1
function getMilk(){
    console.log("leave House");
    console.log("move Right");
    console.log("move Up");
    console.log("move Right");
    console.log("buy Milk");
    console.log("move Left");
    console.log("move Down");
    console.log("move Left");
    console.log("enter House");
}
// call the function - 1
getMilk();

// create the function - 2
function getMilk(bottles){
    var cost = bottles * 50;
    console.log("leave House");
    console.log("move Right");
    console.log("move Up");
    console.log("move Right");
    console.log("buy "+ bottles + " bottles of Milk");
    console.log("cost of " + bottles + " bottles is: " + cost + "/-");
    console.log("move Left");
    console.log("move Down");
    console.log("move Left");
    console.log("enter House");
}
// call the function - 2
getMilk(2);


// create the function - 3
function getMilk(money)
{   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottels = money / 50;

    console.log("buy "+ numberOfBottels + " bottles of Milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

// call the function - 3
getMilk(100);


// create the function - 4 (Main)
function getMilk(money) 
{   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");

    //  No of bottles.
    var noOfBottels = Math.floor(money / 50);
    console.log("buy " + noOfBottels + " bottles of milk.");

    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");

    // remaining change.
    return money % 50;
}

// call the function - 4
var amount = 120.5;
var change = getMilk(amount);
var res = (change >= 0) ? ("remaining change is: " + change + "/-") : "Per bottle cost is 50/-.";
console.log(res);