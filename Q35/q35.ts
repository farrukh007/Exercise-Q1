let pets : string[];
pets = ["Dogs",
        "Cats",
        "Birds",
        "Fish",];

for (var i=0; i<pets.length; i++){
    console.log(pets[i]);
}

for (var i =0; i<pets.length; i++){
    if(pets[i].toLowerCase() == "dogs")
    console.log(pets[i], ": A dog can learn how to sit, stay, and heel in a course of obedience training.");
    
    else if (pets[i].toLowerCase() == "cats")
    console.log(pets[i], ": Some cats can be taught by humans to do tricks.");

    else if (pets[i].toLowerCase() == "birds")
    console.log(pets[i], ": Birds are colorful and fun to watch as they chatter with one another.");

    else if (pets[i].toLowerCase() == "fish")
    console.log(pets[i], ": Fish that are easy to care for and make a great first pet for a family.");
}

console.log("Pets are often devoted to their owners. They can establish a trust with their owner over time.");