let i = parseInt(prompt("Masukkan Angka Bebas: "))

if (i % 2 == 0) {
    console.log("Genap");
} else {
    console.log("Ganjil");
    
let a = parseInt(prompt("ingin mengulanginya lagi ?: "));

while(true) {
    if (i < a){
        console.log(a > i);
        i += 1;
        continue;
    } else {
        console.log("Program Berhenti");
        console.log("Terima kasih telah menggunakan program saya ^^");
        break;
    }
}

}