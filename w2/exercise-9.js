// Tugas 1
function shoutOut() {
    return "Halo Function!"
}

console.log(shoutOut());

// Tugas 2
var num1 = 5;
var num2 = 6;

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

var hasilPerkalian = calculateMultiply(num1,num2);

console.log(hasilPerkalian);

// Tugas 3
var name = "John";
var age = 23;
var address = "Jln. 123 plae grwnd stret";
var hobby = "painting";

function processSentence(name,age,address,hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya yaitu ${hobby}!`;
}

var fullSentence = processSentence(name,age,address,hobby);

console.log(fullSentence);