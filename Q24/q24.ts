// Tests for equality and inequality with strings

let str: string = "Astronaut", str2 = "Mariner";

console.log(str == "Astronaut");
console.log(str == str2);
 

// Tests using the lower case function

str = "PUBLIC HOLIDAYS";
console.log(str.toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to

let num1: number = 12, num2 = 22;

console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

// Tests using "and" and "or" operators

console.log(num1 > num2 && num2 < num1);
console.log(num1 < num2 && num2 > num1);

console.log(num1 > num2 || num2 < num1);
console.log(num1 < num2 || num2 > num1);

//  Test whether an item is in a array
var world_places : any[];
world_places = ["Opera House",
                "Machu Picchu",
                "Eiffle Tower",
                "Taj Mahal",
                "Pyramid of Giza",
                "Great Wall of China",
                "Kremlin"
                ];

for(var i=0; i<world_places.length; i++){
    if(world_places[i] == "Taj Mahal")
    console.log("Place exist in Array");
}

// Test whether an item is not in a array

for(var i=0; i<world_places.length; i++){
    if(world_places[i] == "Indus River")
    console.log("Place exist in Array");
}    
    console.log("Place does not exist in Array");

