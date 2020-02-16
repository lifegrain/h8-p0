function sorting(arrNumber) {
    for (var i = 0; i < arrNumber.length - 1; i++) {
        var big = i;

        for (var j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[big] < arrNumber[j]) {
                big = j;
            }
        }

        var temp = arrNumber[big];
        arrNumber[big] = arrNumber[i]
        arrNumber[i] = temp;
    }

    return arrNumber
  }
  
  function getTotal(arrNumber) {
    var big = [arrNumber[0], 0];
    var output = ``;

    // check if input is empty
    if (!arrNumber.length) {
        return output
    }

    // count the largest number
        for (var j = 0; j < arrNumber.length; j++) {
            if (big[0] === arrNumber[j]) {
                big[1] += 1;
            }
        }

    output = `angka paling besar adalah ${big[0]} dan jumlah kemunculan sebanyak ${big[1]} kali`

    return output
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''