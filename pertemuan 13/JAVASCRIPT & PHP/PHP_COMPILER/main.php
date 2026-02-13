<?php
// Fungsi void (tidak mengembalikan nilai)
function banner() {
echo "------------------------\n";
echo "| Rizqan Akbar Mutaram |\n";
echo "|      Bandung         |\n";
echo "------------------------\n";
}

// Fungsi operasi dengan 2 parameter dan nilai awal
function tambah($a = 1, $b = 1){
    return $a + $b;
}

function kurang($a = 1, $b = 1){
    return $a - $b;
}

// Program utama
banner();

$menu = readline("Masukkan Menu(+|-|/|*|%|stop: ");

while($menu != "stop"){
    
    $nilai1 = (int) readline("Masukkan Nilai 1:");
    $nilai2 = (int) readline("Masukkan Nilai 2:");
    
    $hasil = 0;
    
    if($menu == "+"){
        $hasil = tambah($nilai1, $nilai2);
        echo "Hasil Penjumlahan $nilai1 + $nilai2 adalah $hasil\n";
    } else if($menu == "-"){
        $hasil = kurang($nilai1, $nilai2);
        echo "Hasil Penjumlahan $nilai1 - $nilai2 adalah $hasil\n";
    } else{
        echo "Menu tidak dikenali";
    }
    
    $menu = readline("Masukkan Menu(+|-|/|*|%|stop):");
}

echo "Program Berhenti, Terima Kasih telah menggunakan program saya.\n";

?>