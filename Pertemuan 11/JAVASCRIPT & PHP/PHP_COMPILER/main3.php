<?php

// Input dari pengguna
echo "Masukkan nilai suhu: ";
$suhu = trim(fgets(STDIN));

echo "Pilih Konversi:\n";
echo "1. Celcius ke Fahrenhit\n";
echo "2. Celcius ke Kelvin\n";
echo "3. Fahrenhit ke Celcius\n";
echo "4. Fahrenhit ke Kelvin\n";
echo "5. Kelvin ke Celcius\n";
echo "6. Kelvin ke Fahrenhit\n";

echo "Masukkan pilihan (1-6): ";
$menu = trim(fgets(STDIN));

if ($menu == 1) {
    $hasil = ($suhu * 9/5) + 32;
    echo "Hasil: $hasil °F";
    
} elseif ($menu == 2) {
    $hasil = ($suhu + 273.15);
    echo "Hasil: $hasil K";
} elseif ($menu == 3) {
    $hasil = ($suhu - 32) * 5/9;
    echo "Hasil: $hasil °C";
} elseif ($menu == 4) {
    $hasil = ($suhu - 32) * 5/9 + 273.15;
    echo "Hasil: $hasil K";
} elseif ($menu == 5) {
    $hasil = ($suhu - 273.15);
    echo "Hasil: $hasil °C";
} elseif ($menu == 6) {
    $hasil = ($suhu - 273.15) * 9/5 + 32;
    echo "Hasil: $hasil °F";
    
} else {
    echo "Pilihan tidak valid";
}
    


?>