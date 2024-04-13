let oldguest2 = ["AMAR", "AKBAR", "ANTHONY"];
console.log("Dear", oldguest2[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest2[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest2[2],"I would like to inivite you on dinner !");

console.log("\n");

console.log(oldguest2[0], "is not coming on dinner !!!!");

console.log("\n");

 oldguest2.splice(0,1, "KAMLESH");

console.log("updated list ", oldguest2);

console.log("Dear", oldguest2[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest2[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest2[2],"I would like to inivite you on dinner !");

console.log("\n");

console.log("Hey guys i have founded a bigger dinner table");

oldguest2.unshift("ALI"); //to add element at begning.
oldguest2.splice(2,0, "HAMZAH"); // to add element in the middle.
oldguest2.push("DANIYAL"); // to add element at the end.

console.log("List with new guests", oldguest2);

console.log("\n");

console.log("Dear", oldguest2[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest2[1],"I would like to inivite you on dinner !");
console.log("Dear", oldguest2[2],"I would like to inivite you on dinner !");
console.log("Dear", oldguest2[3],"I would like to inivite you on dinner !");
console.log("Dear", oldguest2[4],"I would like to inivite you on dinner !");
console.log("Dear", oldguest2[5],"I would like to inivite you on dinner !");

console.log("\n");

console.log("sorry guyz i havn't found bigger table so, i have space to invite only two people !");

console.log("\n");

for (let i = 2; i < oldguest2.length; i++) {
    let removedGuest = oldguest2.splice(2,4)
    removedGuest.forEach(removedGuest => {
        console.log(`Sorry Dear ${removedGuest} i can't invite you`)
    });
}

console.log("\n");

console.log("Dear", oldguest2[0], "I would like to inivite you on dinner !");
console.log("Dear", oldguest2[1],"I would like to inivite you on dinner !"); 

console.log("\n");

oldguest2.splice(0,2); //removed last two elements

console.log(oldguest2); //empty list











