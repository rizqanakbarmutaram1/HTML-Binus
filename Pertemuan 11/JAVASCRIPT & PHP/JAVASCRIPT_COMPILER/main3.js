// Input suhu
let suhu = parseFloat(prompt("Masukkan nilai suhu:"));

// Menu pilihan
let menu = parseInt(prompt(
    `Pilih Konversi:
1. Celcius ke Fahrenhit
2. Celcius ke Kelvin
3. Fahrenhit ke Celcius
4. Fahrenhit ke Kelvin
5. Kelvin ke Celcius
6. Kelvin ke Fahrenhit
Masukkan pilihan (1-6):`
));

let hasil;

// Proses konversi
if (menu === 1) {
    hasil = (suhu * 9/5) + 32;
    console.log("Hasil: " + hasil + " °F");
    
} else if (menu === 2) {
    hasil = (suhu + 273.15);
    console.log("Hasil: " + hasil + " K");
} else if (menu === 3) {
    hasil = (suhu - 32) * 5/9;
    console.log("Hasil: " + hasil + " °C");
} else if (menu === 4) {
    hasil = (suhu - 32) * 5/9 + 273.15;
    console.log("Hasil: " + hasil + " K");
} else if (menu === 5) {
    hasil = (suhu - 273.15);
    console.log("Hasil: " + hasil + " °C");
} else if (menu === 6) {
    hasil = (suhu - 273.15) * 9/5 + 32;
    console.log("Hasil: " + hasil + " °F");
    
} else {
    console.log("Pilihan tidak valid!");
}