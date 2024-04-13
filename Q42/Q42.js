"use strict";
let magicians1 = ["amar", "akbar", "anthony"];
function show_magicians1(magician_names) {
    magician_names.forEach(nameofmag => console.log(nameofmag));
}
;
show_magicians1(magicians1);
console.log("\n");
function make_great(magician_names) {
    return magician_names.map(nameofmag => `The Great ${nameofmag}`);
}
let final_results = make_great(magicians1);
show_magicians1(final_results); //called previous function.
