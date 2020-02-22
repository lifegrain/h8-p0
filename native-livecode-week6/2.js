/**
 * 
 * Kalian diminta untuk mengoptimalkan sebuah fitur menu restaurant, karena saat ini, order minuman dan makanan harus dibuat terpisah.
 * Bantulah restoran untuk membuat program yang akan menggabungkan kedua pesanan tersebut.
 * 
 * Function menuOptimizer akan menerima 2 array, satu array berisi order makanan dan array kedua berisi order minuman. Di dalam 
 * tiap array akan ada order dengan format:
 * 
 * 'nama-makanan' atau 'nama-minuman'
 * 
 * Kalian diminta untuk mengelompokkan kedua pesanan ini dalam satu array 2 dimensi dengan format:
 * [['nama orang1', 'nama makanan orang1', 'nama minuman orang1'], ['nama orang2', 'nama makanan orang2', 'nama minuman orang2'], dst]
 * 
 * Contoh input: ['audrick-egg', 'ricky-chicken'], ['ricky-milk', 'audrick-coffee']
 * 
 * Maka Outputnya adalah:
 * [['audrick', 'egg', 'coffee'], ['ricky','chicken','milk']]
 * 
 * Semua orang pasti memesan makanan dan minuman, sehingga tidak ada kasus dimana ada yang tidak memesan makanan atau minuman
 * 
 * Rules:
 * - Dilarang menggunakan built-in function selain .push()!
 * 
 * 
 */

function menuOptimizer(arr1,arr2) {
  var orderlist = [];
  var output = [];
  var person = [];
  var foodlist = [];

  // get person name and food name into orderlist from arr1
  for (var i = 0; i < arr1.length; i++) {
    var name = ``;
    var food = ``;
    var flag = true;

    for (var j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === `-`) {
        flag = false;
        j++;
      }

      if (flag) {
        name += arr1[i][j];
      } else if (!flag) {
        food += arr1[i][j];
      }
    }

    orderlist.push({
      name : name,
      food : food
    })
  }

  // get person name and food name into orderlist from arr2
  for (var i = 0; i < arr2.length; i++) {
    var name = ``;
    var food = ``;
    var flag = true;

    for (var j = 0; j < arr2[i].length; j++) {
      if (arr2[i][j] === `-`) {
        flag = false;
        j++;
      }

      if (flag) {
        name += arr2[i][j];
      } else if (!flag) {
        food += arr2[i][j];
      }
    }

    orderlist.push({
      name : name,
      food : food
    })
  }

  // find list of unique person ordering
  for (var i = 0; i < orderlist.length; i++) {
    var flag = true;
    for (var j = 0; j < person.length; j++) {
      if (orderlist[i].name === person[j]) {
        flag = false;
      }
    }

    if (flag) {
      person.push(orderlist[i].name);
    }
  }

  // push person name into an array in output array then push food name into the person's array
  for (var i = 0; i < person.length; i++) {
    output.push([person[i]]);
    for (var j = 0; j < orderlist.length; j++) {
      if (orderlist[j].name === person[i]) {
        output[i].push(orderlist[j].food);
      }
    }
  }

  return output;
}

console.log(menuOptimizer(
  ['audrick-chicken', 'ayu-cereal', 'ari-bread', 'arnold-soup', 'adiel-chicken'],
  ['adiel-coffee','audrick-soda', 'ayu-milk', 'arnold-juice', 'ari-soda'])
)
/**
 * [
  [ 'audrick', 'chicken', 'soda' ],
  [ 'ayu', 'cereal', 'milk' ],
  [ 'ari', 'bread', 'soda' ],
  [ 'arnold', 'soup', 'juice' ],
  [ 'adiel', 'chicken', 'coffee' ]
]
 */
console.log(menuOptimizer(
  ['audrick-egg', 'ricky-chicken'], 
  ['ricky-milk', 'audrick-coffee'])
  ) 
//[ [ 'audrick', 'egg', 'coffee' ], [ 'ricky', 'chicken', 'milk' ] ]