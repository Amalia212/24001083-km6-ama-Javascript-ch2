function array_range(start, len) {
  // Menggunakan Array.from() untuk membuat array baru dengan panjang 'len'
  // Fungsi callback (_, index) menghasilkan nilai untuk setiap elemen array
  // Nilai dihasilkan dengan menambahkan 'start' dengan indeks (index) elemen
  return Array.from({ length: len }, (a, index) => start + index);
}

// Output array dengan nilai awal 1 dan panjang 4
console.log(array_range(1, 4));

// Output array dengan nilai awal -6 dan panjang 4
console.log(array_range(-6, 4));
