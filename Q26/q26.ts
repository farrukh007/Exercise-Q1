let alien_color2: string = "green";

//  If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.


if (alien_color2 == 'green'){
    console.log("You earned 5 points");
}

//  If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color2 = "Yellow";
if (alien_color2 != 'green'){
    console.log("You earned 10 points");
}

// Write one version of this program that runs the if block and another that runs the else block.
alien_color2 = "green";
if (alien_color2 == 'green'){
    console.log("You earned 5 points");
}
else
    console.log("You earned 10 points");

alien_color2 = "Red";
if (alien_color2 == 'green'){
    console.log("You earned 5 points");
}
else
    console.log("You earned 10 points");

