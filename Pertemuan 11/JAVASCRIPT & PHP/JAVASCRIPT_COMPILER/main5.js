// Input nilai a, b, c
let a = parseFloat(prompt("Masukkan nilai a:"));
let b = parseFloat(prompt("Masukkan nilai b:"));
let c = parseFloat(prompt("Masukkan nilai c:"));

// Cek apakah persamaan kuadrat
if (a === 0) {
    console.log("Bukan persamaan kuadrat karena a = 0");
} else {
    
    // Hitung diskriminan
    let D = (b * b) - (4 * a * c);
    
    console.log("Persamaan: " + a + "x² + " + b + "x + " + c + " = 0");
    console.log("Diskriminan = " + D);
    
    // Percabangan jenis akar
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / 2 (2 * a);
        let x2 = (-b - Math.sqrt(D)) / 2 (2 * a);
        
        console.log("Merupakan akar berbeda");
        console.log("x1 = " + x1);
        console.log("x2 = " + x2);
        
    } else if (D === 0) {
        let x = (-b) / (2 *a);
        
        console.log("Merupakan akar kembar");
        console.log("x1 = x2 = " + x);
        
    } else {
        console.log("Merupakan akar imajiner (tidak memiliki akar real)");
    }
}