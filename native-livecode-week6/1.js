/**
 * 
 * Diberikan sebuah arrray, array tersebut bisa memiliki panjang genap atau ganjil. 
 * Jika panjang array ganjil, maka hilangkan elemen yang berada di tengah2 array tersebut.
 * Jika panjang array genap, maka hilangkan elemen kedua dari kiri dan elemen kedua dari kanan.
 * Lihatlah test-case untuk lebih jelasnya.
 * 
 *
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push(), parseInt(), dan Math.round()
 * -TIDAK MENULISKAN PSEUDOCODE = 0!
 * 
 */

//tulislah pseudocode disini!
/*
Pseudocode

middle is array length / 2
round middle to nearest whole number

IF array length is odd
THEN LOOP array
    IF array index is not the middle
    THEN push into output
IF array length is even
THEN LOOP array
    flag is true
    IF array index is 2nd or 2nd from last index
    THEN flag is false

    IF flag is true
    THEN push into output

PRINT output
*/

function makeEven(array) {
  var output = [];
  var middle = array.length / 2;

  if (array.length % 2 != 0) {
    for (var i = 0; i < array.length; i++) {
      if (i != Math.round(middle) - 1) {
        output.push(array[i]);
      }
    }
  } else if (array.length % 2 === 0) {
    for (var i=0; i < array.length;i ++) {
      var flag = true;
      if (i === array.length - 2 || i === 1) {
        flag = false;
      }

      if (flag) {
        output.push(array[i]);
      }
    }
  }
  return output;
}

console.log(makeEven([1,2,3,4,5])); //[ 1, 2, 4, 5 ]
console.log(makeEven([2,3,4,5,6,7,8])); //[2, 3, 4, 6, 7, 8]
console.log(makeEven([1,2,3,4,5,6])); //[1, 3, 4, 6]
console.log(makeEven([1,2])); //[]
console.log(makeEven([1,2,3,4])) //[1,4]