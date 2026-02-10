// Input sisi
let a = parseFloat(prompt("Masukkan sisi A:"));
let b = parseFloat(prompt("Masukkan sisi B:"));
let c = parseFloat(prompt("Masukkan sisi C:"));

// Cek apakah segitiga
if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Bukan segitiga");
}
else {
    
    // sama sisi
    if (a === b && b ===c) {
        console.log("Segitiga Sama Sisi");
    }
    
    // Siku-siku
    else if (
        a*a + b*b === c*c ||
        a*a + c*c === b*b ||
        b*b + c*c === a*a
    ) {
            console.log("Segitiga Siku-siku");
    }
        
        // Sama kaki
        else if (a === b || a === c || b === c) {
            console.log("Segitiga Sama Kaki");
    }
        
        // Sembarang
        else {
            console.log("Segitiga Sembarang");
    }
}