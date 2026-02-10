let x = parseInt(prompt("Masukkan Umur: "));

if ( ( x >= 0 ) && ( x <= 1 ) ) {
    console.log("bayi");
} else if ( ( x >= 2 ) && ( x <= 3 ) ) {
    console.log("batita");
} else if ( ( x >= 4 ) && ( x <= 5 ) ) {
    console.log("balita");
} else if ( ( x >= 6 ) && ( x <= 12 ) ) {
    console.log("anakAnak");
} else if ( ( x >= 13 ) && ( x <= 17 ) ) {
    console.log("remaja");
} else if ( ( x >= 18 ) && ( x <= 21 ) ) {
    console.log("abg");
} else if ( ( x >= 22 ) && ( x <= 30 ) ) {
    console.log("praDewasa");
} else if ( ( x >= 31 ) && ( x <= 50 ) ) {
    console.log("dewasa");
} else if ( ( x >= 51 ) && ( x <= 70 ) ) {
    console.log("praLansia");
} else {
    console.log("lansia");
}
