function konversiMenit(menit) {
    var min = 0;
    var seconds = "";

    while (menit >= 60) {
        min++;
        menit -= 60;
    }

    if (menit < 10) {
        seconds = `0${menit}`;
    } else {
        seconds = menit;
    }

    return min + ":" + seconds
  }

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

console.log(konversiMenit(600)); // 10:00
console.log(konversiMenit(72)); // 1:12
console.log(konversiMenit(150)); // 12:30