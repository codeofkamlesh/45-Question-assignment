"use strict";
let simpleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
simpleNumbers.forEach(results => {
    if (results == "1") {
        console.log(`${results}st`);
    }
    else if (results == "2") {
        console.log(`${results}nd`);
    }
    else if (results == "3") {
        console.log(`${results}rd`);
    }
    else {
        console.log(`${results}th`);
    }
});
