let objectKosong = {}; // <--- object kosong
let ktp = {
  nama: "Amalia",
  alamat: {
    Kota: "Surabaya",
    Provinsi: "Jawa Timur",
  },
  umur: 21,
  pekerjaan: "Mahasiswa",
};

console.log("hobi ", ktp?.hobi?.makan?.nasi);
ktp.warna = "merah";
console.log("warna ktp ", ktp);
delete ktp.warna;
console.log("delete ktp ", ktp);
ktp.umur = 24;
console.log("Update ktp ", ktp);

console.log("nama ", ktp.nama);
console.log("kota ", ktp["alamat"]["kota"]);
console.log("provinsi ", ktp.alamat.Provinsi);
console.log("kota 2 ", ktp.alamat["kota"]);

let { nama } = ktp; //destructuring
let { nama: nama2 } = ktp; //alias
//let nama = ktp.nama; // tidak destructuring
console.log(ktp.nama);
console.log(nama2);

//test
console.log(`${Object.keys(ktp)}`);
console.log(`${Object.values(ktp)}`);

console.log("object key length ", Object.keys(objectKosong).length);
console.log("object value length ", Object.values(ktp).length);

if (objectKosong == {}) {
  // fail
  console.log("object kosong!!!");
}

if (Object.keys(ktp).length == 0) {
  console.log("object kosong");
}
