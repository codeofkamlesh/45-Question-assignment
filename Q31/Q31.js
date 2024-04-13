"use strict";
let oldusers = ["admin", "kamlesh", "Amar", "Akbar", "Anthony"];
oldusers = []; // here we have made the array empty
if (oldusers.length === 0) {
    console.log("The array is empty we have to add some more users"); //now if statement will print
}
else {
    oldusers.forEach(name => {
        if (name === "admin") {
            console.log(`Hellow ${name}, would you like to see a status report?`);
            console.log("\n");
        }
        else {
            console.log(`Hellow ${name}, thank you for logging in again`);
        }
    });
}
