function digitPerkalianMinimum(angka) {
    var factors = [];
    var digits = [];
    var output;
    
    // find factors
    if (angka === 1) {
        factors.push(1);
    }

    for (var i = 0; i < angka; i++) {
        if (angka % i === 0) {
            factors.push(i);
        }
    }

    // count digits in factor
    for (var i = 0; i < factors.length; i++) {
        digits.push(
            `${angka / factors[i]}${factors[i]}`.length
            );
    }

    output = digits[0]

    for (var i = 0; i < digits.length; i++) {
        if (output > digits[i]) {
            output = digits[i];
        }
    }

    return output
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2