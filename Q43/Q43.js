"use strict";
let magicians2 = ["amar", "akbar", "anthony"];
function show_magicians1(magician_names) {
    magician_names.forEach(nameofmag => console.log(nameofmag));
}
;
console.log("\n");
function make_great(magician_names) {
    return magician_names.map(nameofmag => `The Great ${nameofmag}`);
}
let copy_magicians2 = magicians2.slice();
let copy_great_magicians = make_great(copy_magicians2);
console.log("original array:");
show_magicians1(magicians2);
console.log("\n");
console.log("copy of array:");
show_magicians1(copy_great_magicians);
