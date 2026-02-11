max = parseInt(prompt("Masukkan Input: "))
temp = ""

for ( let i = max; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        temp = temp + i;
    }
    temp = temp + "\n"
    
}

console.log(temp)