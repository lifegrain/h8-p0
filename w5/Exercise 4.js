function totalDigitRekursif(angka) {
    var str = `${angka}`;
    var arr = str.split(``).map(Number);
    var total = 0;
    
    if (!arr.length) {
        
        return total;
    } else {
        var digit = arr.shift();
        total += digit;
        str = arr.join(``);

        total += totalDigitRekursif(str);
    }

    return total;
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5