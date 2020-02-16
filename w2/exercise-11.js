// function balikKata(kata) {
//     var output = "";
//     for (var i = kata.length - 1; i >= 0; i--) {
//         output += ;
//     }
//     return output
//   }

// console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(balikKata('Super')); // repuS


function balikKata(kata) {
  var output = "";
  for (var i = kata.length - 1; i >= 0; i--) {
    if (i % 2 === 1 && i != 1 && i % 3 != 0 && i % 5 != 0 || i === 2 || i === 3){
       output += kata[i];
    }
  }
  return output
}

console.log(balikKata('Hello World!'));

// function isPrime(num) {
//   if (num % 2 === 1 && num != 1 && num % 3 != 0 && num % 5 != 0 || num === 2 || num === 3 ){
//     return true
//   }
//   return false
// }

// console.log(isPrime(2)) // true
// console.log(isPrime(11)) // true

// console.log(isPrime(3)) // false
