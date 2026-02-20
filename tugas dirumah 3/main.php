<?php

class SistemLogin {
    
    private $users = [];
    private $maxUser = 10;
    
    public function __construct() {
        // Data user (maksimal 10)
        $this->users = [
            ["username" => "Moderator", "email" => "moderator@gmail.com", "password" => "momod"],
            ["username" => "Admin", "email" => "admin@gmail.com", "password" => "admin123"],
            ["username" => "User1", "email" => "user1@gmail.com", "password" => "user123"]
            ];
    }
    
    // public function construct() {
    //     // Data user (maksimal 10)
    //     $this->users = [
    //         ["username" => "Moderator", "email" => "moderator@gmail.com", "password" => "momod"],
    //         ["username" => "Admin", "email" => "admin@gmail.com", "password" => "admin123"],
    //         ["username" => "User1", "email" => "user1@gmail.com", "password" => "user123"]
    //         ];
    // }
    
    // Fungsi input
    public function inputData($pesan) {
        echo $pesan;
        return trim(fgets(STDIN));
        // $pesan = readline("$pesan");
        // echo $pesan;
    }
    
    // Fungsi validasi login
    public function validasiLogin($inputUser, $inputPass) {
        foreach ($this->users as $user) {
            if (
                ($inputUser == $user["username"] || $inputUser == $user["email"])
                && $inputPass == $user["password"]
                ) {
                   return true; 
                }
        }
        return false;
    }
    
    // Fungsi utama menjalankan sistem login
    public function jalankan() {
        echo "------------------------\n";
        echo "| Rizqan Akbar Mutaram |\n";
        echo "| Bandung |\n";
        echo "------------------------\n";
        echo "| Sistem Login Dasar |\n";
        echo "------------------------\n";
        
        while (true) {
            $username = $this->inputData("Masukkan Email/Nama Pengguna: ");
            $password = $this->inputData("Masukkan Kata Sandi: ");
            
            if ($this->validasiLogin($username, $password)) {
                echo "Login Berhasil\n";
                break;
            } else {
                echo "Email/Nama Pengguna atau Kata Sandi Salah, Silahkan coba lagi\n";
            }
        }
    }
}

// Menjalankan program
$login = new SistemLogin();
$login->jalankan();

?>