var names;
var message;
message = ": I'm sending you my warmest invitation to this dinner party.";
names = ["Munsif", "Ali", "Ahmed", "Qadir", "Baqir"];
for (var i = 0; i < names.length; i++) {
    console.log("Mr. " + names[i] + message);
}
console.log("\n");
console.log("Mr. " + names[3], "is not joining us at the dinner party.");
console.log("\n");
names = ["Munsif", "Ali", "Ahmed", "Aftab", "Baqir"];
for (var i = 0; i < names.length; i++) {
    console.log("Mr. " + names[i] + message);
}
