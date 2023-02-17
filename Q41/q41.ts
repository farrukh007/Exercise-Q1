let magician_name : string[];
magician_name = ["David Copperfield",
                 "Doug Henning",
                 "Siegfried and Roy",
                 "Lance Burton",
                 "Ricky Jay",
                 "Mark Wilson",
                 "Penn and Teller",
                 "Harry Anderson"];

function show_magicians (arr_name : string[]) {
    for(var i=0; i<arr_name.length; i++){
        console.log(arr_name[i]);
    }
}

show_magicians(magician_name); // Calling