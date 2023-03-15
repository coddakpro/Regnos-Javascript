var regex = /[a-z]+/;
var regex2 = RegExp("[a-z]");
console.log(regex.exec("Abc"));
console.log(regex2.exec("Abc"));

var newRegex = /[0-9]+/;
console.log(newRegex.test("the boy is a good"));

var regex3 = /[a-z]{6,}/;
console.log(regex3.test("Aaalaba".toLowerCase))

var regex4 = /[a-zA-Z]+{6,}/;
console.log(regex3.test("Aaalaba".toLowerCase))