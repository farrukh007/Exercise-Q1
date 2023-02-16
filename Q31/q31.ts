let userName2 : string[];
userName2 = ["Secretary", "Manager", "Admin", "Assistant", "Doctor"];

if(userName2.length > 0){
    console.log("We have some users.");
}

for (var n = userName2.length; n>0; n--){
    userName2.pop();
}

if(userName2.length == 0){
    console.log("We need to find some users!");
}
