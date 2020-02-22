/**
 * Function createMatrix menerima input berupa sebuah angka n dan akan mereturn sebuah matrix berisi angka-angka dari
 * n^2 sampai dengan 1. (Jika n =3 maka dia akan memperlihatkan matrix berisi angka-angka dari 9 sampai 1)
 *
 * Namun, matrix di row yang ganjil akan berisi bintang dan bukan angka (jika index dimulai dari 0). Lihat contoh input dan output
 * untuk detail lebih jelasnya.
 * Implementasikan function tersebut!
 *
 * Rules:
 * - Dilarang menggunakan built-in function .map .reduce .indexOf .lastIndexOf 
 *
 *
 * Contoh Input dan Output
 * Input: 3
 * Output:
 * [[9, 8, 7]
 * [*, *, *]
 * [3, 2, 1]]
 *
 *
 * Input: 2
 * Output:
 * [[4,3],
 *  [*,*]]
 *
 */

function createMatrix(n) {
  var count = 0;
  var number = [];
  var output = [];

  // mempersiapkan multidimensional array
  for (var i = 0; i < n; i++){
    output.push([]);
  }

  // menampung seri nomor dari n ^ 2 s/d 1
  for (var j = n*n; j > 0; j--) {
    number.push(j);
  }

  // push number satu-satu jika index array output genap, dan push `*` jika index array output ganjil
  for (var i = 0; i < output.length; i++) {
    for (var j = 0; j < n; j++){
      if (i % 2 === 0 || i === 0) {
        output[i].push(number[count]);
        count++;
      } else {
        output[i].push(`*`);
        count++;
      }
    }
  }

  return output
}

console.log(createMatrix(2));
/**
 * [ [ 4, 3 ], [ '*', '*' ] ]
 */

console.log(createMatrix(4));
/**
 * [
  [ 16, 15, 14, 13 ],
  [ '*', '*', '*', '*' ],
  [ 8, 7, 6, 5 ],
  [ '*', '*', '*', '*' ]
]
 * 
 */

console.log(createMatrix(5));
/**
 * 
 * [
  [ 25, 24, 23, 22, 21 ],
  [ '*', '*', '*', '*', '*' ],
  [ 15, 14, 13, 12, 11 ],
  [ '*', '*', '*', '*', '*' ],
  [ 5, 4, 3, 2, 1 ]
]
 */
