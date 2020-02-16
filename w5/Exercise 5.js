function kaliTerusRekursif(angka) {
    var str = `${angka}`;
    var arr = str.split(``).map(Number);
    var total = 1;

    // Kali recursive digit
    if (arr.length <= 1) {
        total = angka;
        return total;
    } else {
        var digit = arr.shift();
        total *= digit;
        str = arr.join(``);

        total *= kaliTerusRekursif(str);

    }
    
    // Check jika digit masih lbh 1
    if (`${total}`.length > 1) {
        str = `${total}`;

        total = kaliTerusRekursif(str);
    }

    return total;
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6