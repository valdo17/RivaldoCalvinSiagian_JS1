// Tugas Javacript Rivaldo Calvin Siagian

// Menggunakan if, else, dan nested if
let nilai = 80;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Menggunakan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini Senin");
    break;
  case "Selasa":
    console.log("Hari ini Selasa");
    break;
  case "Rabu":
    console.log("Hari ini Rabu");
    break;
  default:
    console.log("Hari ini bukan Senin, Selasa, atau Rabu");
}

// Menggunakan for statement
console.log("Menggunakan for statement:");
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Menggunakan while loop
console.log("Menggunakan while loop:");
let counter = 1;
while (counter <= 5) {
  console.log("Iterasi ke-" + counter);
  counter++;
}

// Menggunakan do while loop
console.log("Menggunakan do while loop:");
let counter2 = 1;
do {
  console.log("Iterasi ke-" + counter2);
  counter2++;
} while (counter2 <= 5);

// Mendefinisikan sebuah fungsi
function tambah(a, b) {
  return a + b;
}

let hasilPenjumlahan = tambah(3, 5);
console.log("Hasil penjumlahan 3 + 5 adalah: " + hasilPenjumlahan);
