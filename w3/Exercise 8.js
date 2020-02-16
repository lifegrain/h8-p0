function pasanganTerbesar(num) {
    var str = `${num}`;
    var largest = str.slice(0,2);

    for (var i = 1; i < str.length - 1; i++) {
        if (largest < str.slice(i,i + 2)) {
            largest = str.slice(i,i + 2);
        }
    }

    return largest
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99