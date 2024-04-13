"use strict";
function make_shirts(size, message1, message2) {
    if (size === "medium" || size === "large") {
        console.log(`You got ${size} size shirt with "${message1}" printed on it`);
    }
    else {
        console.log(`You got ${size} size shirt with "${message2}" printed on it`);
    }
}
make_shirts("small", "I love typescript", "welcome to GIAIC");
make_shirts("medium", "I love typescript", "welcome to GIAIC");
make_shirts("large", "I love typescript", "welcome to GIAIC");
make_shirts("zero", "I love typescript", "welcome to GIAIC");
