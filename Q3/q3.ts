var str: any;
var name1 = "sYed zeeShan ahMed";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

name1 = name1.toLowerCase();
str = name1.split(' ');

for (var i =0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    console.log(str[i]);    
}


