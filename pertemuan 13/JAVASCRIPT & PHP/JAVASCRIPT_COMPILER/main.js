// Fungsi void (tidak mengembalikan nilai)
function banner() {
console.log(`
------------------------
| Rizqan Akbar Mutaram |
|      Bandung         |
------------------------
`);
}

// Fungsi operasi dengan 2 parameter dan nilai awal
function tambah(a = 1, b = 1){
    return a + b;
}

function kurang(a = 1, b = 1){
    return a - b;
}

// Program utama
banner();

let menu = prompt("Masukkan Menu(+|-|/|*|%|stop: ");

while(menu != "stop"){
    
    let nilai1 = parseInt(prompt("Masukkan Nilai 1:"));
    let nilai2 = parseInt(prompt("Masukkan Nilai 2:"));
    
    let hasil;
    
    if(menu == "+"){
        hasil = tambah(nilai1, nilai2);
        console.log(`Hasil Penjumlahan ${nilai1} + ${nilai2} adalah ${hasil}`);
    } else if(menu == "-"){
        hasil = kurang(nilai1, nilai2);
        console.log(`Hasil Penjumlahan ${nilai1} - ${nilai2} adalah ${hasil}`);
    } else{
        console.log("Menu tidak dikenali");
    }
    
    menu = prompt("Masukkan Menu(+|-|/|*|%|stop):");
}

console.log("Program Berhenti, Terima Kasih telah menggunakan program saya.");