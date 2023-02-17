var current_users;
var new_users;
var count = 0;
current_users = ["Secretary", "Manager", "Admin", "Assistant", "Doctor"];
new_users = ["Programmer", "Executive", "ADMIN", "Professor", "Doctor"];
// Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// Case insensitive
for (var x = 0; x < new_users.length; x++) {
    count = 0;
    for (var y = 0; y < current_users.length; y++) {
        if (new_users[x].toLowerCase() == current_users[y].toLowerCase()) {
            count++;
            console.log("The person will need to enter a new username.");
        }
    }
    if (count == 0)
        console.log("username is available.");
}
