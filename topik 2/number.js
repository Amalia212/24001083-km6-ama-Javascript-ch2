let nilaiUjianKehidupan = 50;
let nilaiUjianAkhirat = 20;
let tambah = nilaiUjianKehidupan + nilaiUjianAkhirat;
console.log("tambah ", tambah);

let NaN = "test" / nilaiUjianKehidupan;
"test" + 50;
console.log("NaN ", NaN);
//console.log("toExponantial ", tambah.toExponantial());
//toExponential() <--- jarang dipakai
console.log(
  "toFixeed ",
  Number(Number(tambah.toFixed(2)) + Number(tambah.toFixed(2))).toFixed(2)
);
console.log("toFixed number ", Number(20.5 + 10).toFixed(2));
// toFixed() <--- sering dipakai
let angka = 5000;
let uang = 500000000000;
console.log("toLocaleString", angka.toLocaleString());
console.log("toLocaleString", "Rp. " + uang.toLocaleString());
console.log("toLocaleString ARAB", "Rp. " + uang.toLocaleString("ar-EG"));
// toLocaleString() <--- sering dipakai
console.log("toPrecision", angka.toPrecision(2));
// toPrecision() <--- jarang dipakai
console.log("toString", typeof angka.toString());
console.log("toString param", angka.toString(5));
// toString() <--- jarang dipakai
console.log("valueOf", angka.valueOf());
// valueOf() <--- jarang dipakai
