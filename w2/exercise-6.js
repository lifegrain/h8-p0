// 1. Melakukan Looping Menggunakan While
var count = 2;
console.log("LOOPING PERTAMA");
while (count <= 20) {
    console.log(count + " - I love coding");
    count += 2;
}

console.log("LOOPING KEDUA");
while (count >= 2) {
    console.log(count + " - I will become fullstack developer");
    count -= 2;
}

// 2. Melakukan Looping Menggunakan For
var i;
console.log("LOOPING PERTAMA");
for (i = 1; i <= 20; i++) {
    console.log(i + " - I love coding");
}
console.log("LOOPING KEDUA");
for (i = 20; i >= 1; i--) {
    console.log(i + " - I will become fullstack developer");
}

// 3. Angka Ganjil dan Genap
for (var j = 1; j <= 10; j++) {
    if (j % 2 === 0){
        console.log("GENAP");
    } else {
        console.log("Ganjil");
    }
}

for (var j = 1; j <= 30; j += 2) {
    if (j % 3 === 0){
        console.log(j + " kelipatan 3");
    }
}

for (var j = 1; j <= 60; j += 5) {
    if (j % 6 === 0){
        console.log(j + " kelipatan 6");
    }
}

for (var j = 1; j <= 100; j += 9) {
    if (j % 10 === 0){
        console.log(j + " kelipatan 10");
    }
}