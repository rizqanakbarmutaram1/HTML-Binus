<?php
$max = readline("Masukkan Input: ");
$temp = "";


for ( $i = $max; $i > 0; $i--) {
    for ($j = 0; $j < $i; $j++) {
        $temp = $temp.$i;
    }
    $temp = $temp."\n";
}
echo($temp);

?>