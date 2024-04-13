
let world: any[] = ["karachi", "islamabad", "murree", "hunza valley", "china border"];
console.log("original order", world);

console.log("\n");

let copiedarray:any[] =[...world]; //to make a copy/clone of an original array

copiedarray.sort(); // to sort copy of an array in ascending order

console.log("in alphabetical order copy", copiedarray);

console.log("\n");

console.log("original array", world); 

console.log("\n");

let copiedarray2:any[] =[...copiedarray]; //to make a copy/clone of an original array
copiedarray2.reverse();
console.log("in reverse order copy", copiedarray2);

console.log("\n");

console.log("original array", world); 

console.log("\n");

world.reverse();
console.log("Reverse order of original array", world);

console.log("\n");

world.reverse();
console.log("again in original order", world);

console.log("\n");

world.sort();
console.log("sorted original array", world);

console.log("\n");

world.reverse();
console.log("reversed original array", world);