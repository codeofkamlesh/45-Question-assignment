"use strict";
let users = ["admin", "kamlesh", "Amar", "Akbar", "Anthony"];
users.forEach(name => {
    if (name === "admin") {
        console.log(`Hellow ${name}, would you like to see a status report?`);
        console.log("\n");
    }
    else {
        console.log(`Hellow ${name}, thank you for logging in again`);
    }
});
