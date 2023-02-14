var names : string[];
var message : any;
message = ": I'm sending you my warmest invitation to this dinner party.";
names = ["Munsif", "Ali", "Ahmed", "Qadir", "Baqir"];

for(var i=0; i<names.length; i++){

    console.log("Mr. " + names[i] + message);
}
console.log("\n");
console.log("Mr. " + names[3], "is not joining us at the dinner party.");
console.log("\n");
names = ["Munsif", "Ali", "Ahmed", "Aftab", "Baqir"];
for(var i=0; i<names.length; i++){

    console.log("Mr. "+ names[i] + message);
}

console.log("\n");
console.log("We have more guests so we should have a bigger dinner table...");
console.log("\n");

names = ["Mujtaba", "Munsif", "Ali", "Shahzain", "Ahmed", "Aftab", "Baqir"];
names.push("Rehmat Ali");
for(var i=0; i<names.length; i++){

    console.log("Mr. "+ names[i] + message);
}

console.log("\n");
console.log("We didn't receive a bigger dinner table so we have space for 2 persons only.");
console.log("\n");

var names2 : any;
var message2 = ": Sorry for inconvenience. You are no longer invited to dinner.";
for(var i=names.length; i>2; i--){

    names2 = names.pop();    
    console.log("Mr. "+ names2 + message2);
}
console.log("\n");
for(var i=0; i<names.length; i++){
    console.log("Mr. "+ names[i] + ": You are still invited.");
}

console.log("\n");
for(var i=names.length; i>0; i--){

    names2 = names.pop();    
    console.log("Mr. "+ names2 + ": Removed");
}

console.log("List is empty:", names.length);
