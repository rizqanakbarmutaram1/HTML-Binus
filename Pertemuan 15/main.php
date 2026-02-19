<?php

$daftar = [];

while (true) {
    
    echo "\nMenu \n";
    echo "1. Buat \n";
    echo "2. Tampilkan \n";
    echo "3. Edit \n";
    echo "4. Hapus \n";
    echo "0. Keluar \n";
    
    $menu = readline("Masukkan Menu: ");
    
    switch ($menu) {
        
        case 1:
            $indeks = 0;
            while (true) {
                $nama = readline("Indeks $indeks: ");
                
                if ($nama == "") {
                    break;
                }
                
                $daftar[] = $nama;
                $indeks++;
            }
            echo "Data berhasil ditambahkan\n";
            break;
            
        case 2:
            if (empty($daftar)) {
                echo "Data kosong\n";
            } else {
                foreach ($daftar as $index => $nama) {
                    echo "Indeks $index: $nama\n";
                }
                echo "Data Berhasil Ditampilkan\n";
            }
            break;
            
        case 3:
            $ubahIndex = readline("Masukkan yang ingin kamu ubah: ");
            
            if (isset($daftar[$ubahIndex])) {
                $namaBaru = readline("Masukkan nama baru: ");
                $daftar[$ubahIndex] = $namaBaru;
                echo "Data dalam daftar telah berhasil diubah\n";
            } else {
                echo "tidak ditemukan\n";
            }
            break;
            
        case 4:
            $hapusIndex = readline("Masukkan yang ingin kamu hapus: ");
            
            if (isset($daftar[$hapusIndex])) {
                unset($daftar[$hapusIndex]);
                $daftar = array_values($daftar); // reset indeks
                echo "Data Berhasil Dihapus\n";
            } else {
                echo "tidak ditemukan\n";
            }
            break;
            
        case 0:
            echo "terima kasih telah menggunakan program saya\n";
            exit;
            
        default:
            echo "Input Tidak Valid\n";
    }
}
?>