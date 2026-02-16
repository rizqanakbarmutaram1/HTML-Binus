class DataMahasiswa {
    constructor() {
        this._nama = null;
        this._nilai = null;
    }
    
    // Setter
    set nama(namaBaru) {
        this._nama = namaBaru;
    }
    
    set nilai(nilaiBaru) {
        this._nilai = nilaiBaru;
    }
    
    // Getter
    get nama() {
        return this._nama ?? "None";
    }
    
    // Method hapus data
    hapusData() {
        this._nama = null;
        this._nilai = null;
    }
}

let data = new DataMahasiswa();
let jalan = true;

while (jalan) {
    
    let pilihan = prompt(
`===== Program OOP =====
1. Mendeklarasikan Objek
2. Menampilkan Objek
3. Merubah Nilai Objek
4. Menghapus Objek
5. Keluar Dari Program
Masukkan Pilihan Berupa Angka (1/2/3/4/5/):`
);
        
        switch (pilihan) {
            
            case "1":
                let namaInput = prompt("Masukkan Namamu:");
                let nilaiInput = prompt("Masukkan Nilaimu:");
                
                data.nama = namaInput;
                data.nilai = nilaiInput;
                
                alert("Data Berhasil Ditambahkan");
                break;
                
            case "2":
                alert(`Nama: ${data.nama}\nNilai: ${data.nilai}`);
                break;
                
            case "3":
                let ubah = prompt("Apa yang ingin diubah (Nama/Nilai):");
                
                if (ubah.toLowerCase() === "nama") {
                    let namaBaru = prompt("Masukkan Nama Baru:");
                    data.nama = namaBaru;
                    alert("Data Nama Berhasil Dirubah");
                    
                } else if (ubah.toLowerCase() === "nilai") {
                    let nilaiBaru = prompt("Masukkan Nilai Baru:");
                    data.nilai = nilaiBaru;
                    alert("Data Nilai Berhasil Dirubah");
                    
                } else {
                    alert("Pilihan tidak valid");
                }
                break;
                
            case "4":
                data.hapusData();
                alert("Data Berhasil Dihapus");
                break;
                
            case "5":
                alert("Terima Kasih Sudah Menggunakan Program Saya");
                jalan = false;
                break;
                
            default:
                alert("Pilihan tidak tersedia");
        }
}
// Contoh 1
// class Students {
//     constructor(name = "Mahasiswa", grade = 100) {
//         this.name = name;
//         this.grade = grade;
//     }

//     printStudent() {
//         console.log("Nama:", this.name, "\nGrade:", this.grade);
//     }
// }

// let name = prompt("Masukkan Nama Mahasiswa: ");
// let grade = parseInt(prompt("Masukkan Nilai Mahasiswa: "))

// let students1 = new Students(name, grade);

// students1.printStudent();

    // Deklarasi Method Getter
    // Merupakan sebuah metode untuk mendapatkan data dari class
    // getStudent(typesOfParameterClass) {
    //     if (typesOfParameterClass == "Nama") {
    //         return this.name;
    //     } else if (typesOfParameterClass == "Grade") {
    //         return this.grade;
    //     } else {
    //         return "Data Tidak Ada";
    //     }
    // }

    // Deklarasi Method Setter
    // Merupakan metode untuk mengubah data pada class
//     setStudent(name, grade) {
//         this.name = name;
//         this.grade = grade;
//     }
// }

// students1 = new Students()

// students1.printStudent()

// Contoh Implementasi Getter
// Nama_pegawai = students1.getStudent("Nama")
// console.log("Nama Pegawainya adalah", Nama_pegawai)

// Contoh Implementasi Setter
// students1.setStudent("Rizqan", 100)
// students1.printStudent()

// employee2 = new Employee("Rizqan", 100)

// employee2.printEmployee()




// function ini(){
//     console.log(`
//     ===== Program OOP =====
//     `);
//     console.log("1.Mendeklarasikan Objek")
//     console.log("2.Menampilkan Objek")
//     console.log("3.Merubah Nilai Objek")
//     console.log("4.Menghapus Objek")
//     console.log("5.Keluar Dari Program")
// }

// ini();

// let Angka = prompt("Masukkan Pilihan Berupa Angka (1/2/3/4/5):")

// while (Angka != "stop"){
    
//     let angka1 = prompt("Masukkan Namamu: ")
//     let angka2 = prompt("Masukkan Nilaimu: ")
    
//     let hasil;
    
//     if(Angka == "0"){
//         hasil = tambah(nilai1, nilai2);
//         console.log(`Hasil Penjumlahan ${nilai1} + ${nilai2} adalah ${hasil}`);
//     } else if(Angka == "1"){
//         hasil = (nilai1, nilai2);
//         console.log(`Hasil Penjumlahan ${nilai1} - ${nilai2} adalah ${hasil}`);
//     } else{
//         console.log("data berhasil ditambahkan");
//     }
// }  