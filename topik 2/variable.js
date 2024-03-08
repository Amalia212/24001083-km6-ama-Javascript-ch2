let $ = "FEJS";
// let 2$="FEJS$" <--- tidak valid

// let const var

var diskon = 500; // GLOBAL SCOPE
if (true) {
  var diskon = 300; // global scope
}

console.log("Diskon ", diskon);

var diskon = 500; // global scope
function diskonScope() {
  var diskon = 300; // local scope
  console.log(diskon);
}

diskonScope();
console.log(diskon);

var name; // declaration
console.log(name);
name = "BOT"; // assign
console.log(name);

var name = "BOT SAABRINA"; // re-declaration
console.log(name);
name = "Sabrina"; // re-assign

function BLOCKSCOPE(params) {
  const fejs = "FEJS";
  let diskon = 10000; //global scope
  console.log("BLOCK SCOPE ", fejs);
}
BLOCKSCOPE();
// console.log("BLOCK NON SCOPE ", fejs);

//
