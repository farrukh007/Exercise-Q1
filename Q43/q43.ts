let original_magician_name : string[];
original_magician_name = ["David Copperfield",
                          "Doug Henning",
                          "Siegfried and Roy",
                          "Lance Burton",
                          "Ricky Jay",
                          "Mark Wilson",
                          "Penn and Teller",
                          "Harry Anderson"];

let copy_magician_name : string[];
copy_magician_name = [];

function pushArray2(arr : any, arr2 : any){
    for (var i=arr.length; i>0; i--){
        arr.pop();
    }
    arr.push.apply(arr, arr2);
}

function make_great2(arr_name : string[]){
    let text_pharase : string;
    text_pharase="Great ";
    
    for(var i=0; i<arr_name.length; i++){
        arr_name[i] = text_pharase.concat(arr_name[i]);
    }
    return arr_name;
}

function show_magicians3 (arr_name : string[]) {
 //   make_great2(magician_name2);
    for(var i=0; i<arr_name.length; i++){
        console.log(arr_name[i]);
    }
}

pushArray2(copy_magician_name, original_magician_name); // making duplicate

console.log("The Original Magician Names:");
show_magicians3(original_magician_name); // Calling Orignal names
console.log("\nThe Great added Magician Names:");
show_magicians3(make_great2(copy_magician_name)); // Calling with copy names