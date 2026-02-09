<?php
// Fungsi untuk mengubah derajat ke radian
function toRadian($derajat) {
    return $derajat * (pi() / 180);
}

// Input
$latA = readline("Masukkan Latitude Titik A: ");
$longA = readline("Masukkan Longtitude Titik A: ");
$latB = readline("Masukkan Latitude Titik B: ");
$longB = readline("Masukkan Longtitude Titik B: ");

// Konversi ke radian
$lat1 = toRadian($latA);
$lat2 = toRadian($latB);
$dLat = toRadian($latB - $latA);
$dLon = toRadian($longB - $longA);

// Rumus Haversine
$R = 6371; // radius bumi dalam km
$a = sin($dLat/2) * sin($dLat/2) +
     cos($lat1) * cos($lat2) *
     sin($dLon/2) * sin($dLon/2);
     
$c = 2 * atan2(sqrt($a), sqrt(1-$a));
$jarak = $R * $c;

// Output
echo "Jarak antara dua titik adalah: " . round($jarak, 2) . " km/n";
?>