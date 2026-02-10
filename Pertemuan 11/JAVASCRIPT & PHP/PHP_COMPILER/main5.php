<?php

// Input nilai a, b, c
echo "Masukkan nilai a: ";
$a = trim(fgets(STDIN));

echo "Masukkan nilai b: ";
$b = trim(fgets(STDIN));

echo "Masukkan nilai c: ";
$c = trim(fgets(STDIN));

// Cek apakah persamaan kuadrat
if ($a == 0) {
    echo "Bukan persamaan kuadrat karena a = 0";
}
else {
    
    // Hitung diskriminan
    $D = ($b * $b) - (4 * $a * $c);
    
    echo "Persamaan: {$a}x^2 + {$b}x + {$c} = 0\n";
    echo "Nilai diskriminan = $D\n";
    
    // Percabangan jenis akar
    if ($D > 0) {
        $x1 = (-$b + sqrt($D)) / (2 * $a);
        $x2 = (-$b - sqrt($D)) / (2 * $a);
        
        echo "Merupakan akar berbeda\n";
        echo "x1 = $x1\n";
        echo "x2 = $x2\n";
        
    } elseif ($D == 0) {
        $x = (-$b) / (2 * $a);
        
        echo "Merupakan akar kembar\n";
        echo "x1 = x2 = $x\n";
        
    } else {
        echo "Merupakan akar imajiner (tidak memiliki akar real)\n";
    }
}
?>