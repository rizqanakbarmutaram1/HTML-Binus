<?php
// Input nilai A, B, C
$A = readline("Masukkan nilai A:");
$B = readline("Masukkan nilai B:");
$C = readline("Masukkan nilai C:");

// Proses menghitung diskriminan
$D = ($B * $B) - (4 * $A * $C);

// Output hasil
echo "Hasil diskriminan adalah: " . $D . PHP_EOL;
?>