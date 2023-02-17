var size2;
var msg2;
function make_shirt(size2, msg2) {
    if (size2 === void 0) { size2 = "large"; }
    if (msg2 === void 0) { msg2 = "I Love TypeScript!"; }
    console.log("The size of the T-Shirt is: ", size2);
    console.log("Message printed on it: ", msg2);
}
make_shirt();
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "Truly Unlimited...!");
