function makanTerusRekursif(waktu) {
    var eat = 0;

    if (waktu > 0) {
        waktu -= 15;
        eat++;
        eat += makanTerusRekursif(waktu);
    }

    return eat;
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0