// 1. Menyusun Barisan Bintang
var rows1 = 10;

for (var i = 1; i <= rows1; i++) {
    console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 10;
var count = "";

for (var i = 1; i <= rows2; i++) {
    for (var j = 1; j <= rows2; j++) {
        count += "*";
    }
    console.log(count);
    count = "";
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 10;
var stairs = "";
for (var i = 1; i <= rows3; i++) {
    for (var j = 1; j <= i; j++) {
        stairs += "*";
    }
    console.log(stairs);
    stairs = "";
}