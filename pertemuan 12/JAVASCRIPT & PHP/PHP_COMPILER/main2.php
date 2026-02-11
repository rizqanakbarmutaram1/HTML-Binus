<?php

$x = readline("Masukkan Angka Bebas: ");

if ($x % 2 == 0) {
    echo("Genap");
} else {
    echo("Ganjil \n");
    
$i = true; 
$int_max = readline("Ingin mengulanginya lagi? ");

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