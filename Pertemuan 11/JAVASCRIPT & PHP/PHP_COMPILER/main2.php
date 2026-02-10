<?php

$x = readline("Masukkan Umur: "); 

if (($x >= 0 ) && ($x <= 1)) {
    printf("bayi");
} else if (($x >= 2) && ($x <= 3)) {
    printf("batita");
} else if (($x >= 4) && ($x <= 5)) {
    printf("praSekolah");
} else if (($x >= 6) && ($x <= 12)) {
    printf("anak");
} else if (($x >= 13) && ($x <= 17)) {
    printf("remaja");
} else if (($x >= 18) && ($x <= 21)) {
    printf("muda");
} else if (($x >= 22) && ($x <= 30)) {
    printf("praDewasa");
} else if (($x >= 31) && ($x <= 50)) {
    printf("dewasa");
} else if (($x >= 51) && ($x <= 70)) {
    printf("praLansia");
} else {
    printf("lansia");
}

?>
