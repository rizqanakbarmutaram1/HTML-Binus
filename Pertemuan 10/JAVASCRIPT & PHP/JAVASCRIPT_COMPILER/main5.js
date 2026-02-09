// Fungsi untuk mengubah derajat ke radian
function toRadian(degree) {
    return degree * (Math.PI / 180);
}

// Input
let latA = parseFloat(prompt("Masukkan Latitude Titik A:"));
let longA = parseFloat(prompt("Masukkan Longitude Titik A:"));
let latB = parseFloat(prompt("Masukkan Latitude Titik B:"));
let longB = parseFloat(prompt("Masukkan Longtitude Titik B:"));

// Konversi ke radian
let lat1 = toRadian(latA);
let lat2 = toRadian(latB);
let dLat = toRadian(latB - latA);
let dLon = toRadian(longB - longA);

// Rumus Haversine
let R = 6371; // radius bumi dalam km
let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        
let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
let distance = R * c;
        
// Output 
console.log("Jarak antara dua titik adalah: " + distance.toFixed(2) + " km");