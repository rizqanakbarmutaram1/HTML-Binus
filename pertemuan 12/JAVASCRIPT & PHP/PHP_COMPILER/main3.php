<?php

// Input sisi segitiga
echo "Masukkan sisi A: ";
$a = trim(fgets(STDIN));

echo "Masukkan sisi B: ";
$b = trim(fgets(STDIN));

echo "Masukkan sisi C: ";
$c = trim(fgets(STDIN));

// Cek apakah bisa membentuk segitiga
if ($a + $b <= $c || $a + $c <= $b || $b + $c <= $a) {
    echo "Bukan segitiga";
}
else {
    
    // Sama sisi
    if ($a == $b && $b == $c) {
        echo "Segitiga Sama Sisi \n";
    }
    
    // Siku-siku
    elseif (
        ($a*$a + $b*$b == $c*$c) ||
        ($a*$a + $c*$c == $b*$b) ||
        ($b*$b + $c*$c == $a*$a)
        ){
            echo "Segitiga Siku-siku";
        }
        
        // Sama kaki
        elseif ($a == $b || $a == $c || $b == $c) {
            echo "Segitiga Sama Kaki";
        }
        
        // Sembarang
        else {
            echo "Segitiga Sembarang";
        }
        
$i = true;
$int_max = readline("Ingin Mengulanginya lagi?: ");

while (true) {
    if ($i < $int_max) {
        echo("This is iteration number $i\n");
        $i == 1;
        continue;
    } else {
        echo("Program Berhenti\n");
        echo("Thank you for using my program ^^\n");
        break;
    }
}
}
?>