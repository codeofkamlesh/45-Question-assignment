let oldguest = ["AMAR", "AKBAR", "ANTHONY"];

console.log("Dear", oldguest[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest[2],"I would like to inivite you on dinner !");

console.log("\n");

console.log(oldguest[0], "is not coming on dinner !!!!");

console.log("\n");

oldguest.splice(0,1, "KAMLESH");

console.log("updated list ", oldguest);

console.log("Dear", oldguest[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest[2],"I would like to inivite you on dinner !");




