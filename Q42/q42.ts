let magician_name2 : string[];
magician_name2 = ["David Copperfield",
                 "Doug Henning",
                 "Siegfried and Roy",
                 "Lance Burton",
                 "Ricky Jay",
                 "Mark Wilson",
                 "Penn and Teller",
                 "Harry Anderson"];

let text_pharase : string;
text_pharase="Great ";
function make_great(arr_name : string[]){
    for(var i=0; i<arr_name.length; i++){
        arr_name[i] = text_pharase.concat(arr_name[i]);
    }
}

function show_magicians2 (arr_name : string[]) {
    make_great(magician_name2);
    for(var i=0; i<arr_name.length; i++){
        console.log(arr_name[i]);
    }
}

show_magicians2(magician_name2); // Calling