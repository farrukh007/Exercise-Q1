

var world_places : any[];
var world_places2 : any[];

world_places = ["Opera House",
                "Machu Picchu",
                "Eiffle Tower",
                "Taj Mahal",
                "Pyramid of Giza",
                "Great Wall of China",
                "Kremlin"
                ];
world_places2 = [];

function pushArray(arr : any, arr2 : any){
    for (var i=arr.length; i>0; i--){
        arr.pop();
    }
    arr.push.apply(arr, arr2);
}
pushArray(world_places2, world_places);

//Print your array in its original order.
console.log("Original Order:");
console.log(world_places);

//Print your array in alphabetical order without modifying the actual list.
world_places2.sort();
console.log("\n");
console.log("Alphabatical Order:");
console.log(world_places2);

//Print your array in its original order.
console.log("\n");
console.log("Original Order:");
console.log(world_places);

//Print your array in reverse alphabetical order without changing the order of the original list.
world_places2.reverse();
console.log("\n");
console.log("Reverse Alphabetical Order:");
console.log(world_places2);

//Print your array in its original order.
console.log("\n");
console.log("Original Order:");
console.log(world_places);

//Reverse the order of your list. Print the array to show that its order has changed.
pushArray(world_places2, world_places);
world_places2.reverse();
console.log("\n");
console.log("Reverse Original Order:");
console.log(world_places2);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
world_places2.reverse();
console.log("\n");
console.log("Reverse again to back in Orignal Order:");
console.log(world_places2);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
world_places.sort();
console.log("\n");
console.log("Alphabatical Order:");
console.log(world_places);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
world_places.reverse();
console.log("\n");
console.log("Reverse Alphabatical Order:");
console.log(world_places);
