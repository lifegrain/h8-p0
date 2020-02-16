function hapusSimbol(str) {
    var output = ``;
    var regex = /[\w\d]/;

    for (var i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            output += str[i];
        }
    }

    return output;
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100