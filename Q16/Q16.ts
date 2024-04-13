let oldguest1 = ["AMAR", "AKBAR", "ANTHONY"];
console.log("Dear", oldguest1[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest1[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest1[2],"I would like to inivite you on dinner !");

console.log("\n");

console.log(oldguest1[0], "is not coming on dinner !!!!");

console.log("\n");

 oldguest1.splice(0,1, "KAMLESH");

console.log("updated list ", oldguest1);

console.log("Dear", oldguest1[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest1[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest1[2],"I would like to inivite you on dinner !");

console.log("\n");

console.log("Hey guys i have founded a bigger dinner table");

oldguest1.unshift("ALI"); //to add element at begning.
oldguest1.splice(2,0, "HAMZAH"); // to add element in the middle.
oldguest1.push("DANIYAL"); // to add element at the end.

console.log("List with new guests", oldguest1);

console.log("\n");

console.log("Dear", oldguest1[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest1[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest1[2],"I would like to inivite you on dinner !");
console.log("Dear", oldguest1[3],"I would like to inivite you on dinner !");
console.log("Dear", oldguest1[4],"I would like to inivite you on dinner !");
console.log("Dear", oldguest1[5],"I would like to inivite you on dinner !");






