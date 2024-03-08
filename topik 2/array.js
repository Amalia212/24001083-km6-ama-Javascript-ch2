// array declaration with array literal
let namaKeluarga = ["Pak Sabana", "Mak Sabrina", "nak Sabrina"];

// array declaration with new keyword
let namaKK = new Array("Sabana", "Sabrina", "Sabara");

console.log("nama keluarga ", namaKeluarga);
console.log("Length ", namaKeluarga?.length);

//nested array
const arrays = [namaKeluarga, namaKK];
console.log("Nested Arrays", arrays);

console.log("Concat ", namaKeluarga?.concat(namaKK)); //return array
console.log("return keluarga", namaKeluarga?.push(namaKK)); // return length array
console.log("return kk ", namaKK?.unshift(namaKeluarga)); // return length array
console.log("push keluarga ", namaKeluarga);
console.log("push kk", namaKK);

console.log("pop ", namaKeluarga?.pop());
console.log("pop keluarga ", namaKeluarga);
console.log("shift ", namaKK?.shift());
console.log("shift kk ", namaKK);

console.log("Join ", namaKeluarga?.join(""));
console.log("Join ", namaKeluarga?.join("_"));
