/**
 * Function putDiagonal menerima input berupa sebuah string. String ini harus ditaruh ke dalam diagonal kanan sebuah array 2 dimensi.
 * Untuk lokasi lain di dalam array tersebut, taruh lah string '*'.
 * Panjang row dan column dari array tersebut sepanjang string input. 
 * Lihatlah test-case untuk lebih jelasnya.
 *
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()!
 * 
 */
function putDiagonal(str) {
   
}


console.log(putDiagonal('dgjm'));
/**
 * 
 [
  [ '*', '*', '*', 'd' ],
  [ '*', '*', 'g', '*' ],
  [ '*', 'j', '*', '*' ],
  [ 'm', '*', '*', '*' ]
]
 * 
 */

 console.log(putDiagonal('abcdef'))
//  [
//     [ '*', '*', '*', '*', '*', 'a' ],
//     [ '*', '*', '*', '*', 'b', '*' ],
//     [ '*', '*', '*', 'c', '*', '*' ],
//     [ '*', '*', 'd', '*', '*', '*' ],
//     [ '*', 'e', '*', '*', '*', '*' ],
//     [ 'f', '*', '*', '*', '*', '*' ]
// ]