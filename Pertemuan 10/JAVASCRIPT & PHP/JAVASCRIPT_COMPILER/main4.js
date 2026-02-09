// Input nilai A, B, C
let A = parseFloat(prompt("Masukkan nilai A:"));
let B = parseFloat(prompt("Masukkan nilai B:"));
let C = parseFloat(prompt("Masukkan nilai C:"));

// Proses menghitung diskriminan 
let D = (B * B) - (4 * A * C);

// Output hasil
console.log("Nilai diskriminan adalah: " + D);