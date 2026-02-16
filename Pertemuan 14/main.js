// Contoh 1
class Students {
    constructor(name = "Mahasiswa", grade = 100) {
        this.name = name;
        this.grade = grade;
    }

    printStudent() {
        console.log("Nama:", this.name, "\nGrade:", this.grade);
    }
}

let name = prompt("Masukkan Nama Mahasiswa: ");
let grade = parseInt(prompt("Masukkan Nilai Mahasiswa: "))

let students1 = new Students(name, grade);

students1.printStudent();




// Contoh 1
// class Student{
//     constructor(nama = "Rizqan Akbar Mutaram", nilai = 100) {
//         this.nama = nama;
//         this.nilai = nilai;
//     }

//     printEmployee() {
//         console.log("Nama:", this.nama);
//         console.log("Nilai:", this.nilai);
//     }
// }

// let student = new Student("Rizqan Akbar Mutaram", 100);

// student.printEmployee();

// let nama = prompt("Masukkan nama:");
// let reguler = prompt("Masukkan reguler:");
// let jurusan = prompt("Masukkan jurusan:");