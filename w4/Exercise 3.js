function cariMedian(arr) {
    var median;

    if (arr.length % 2 === 0) {
        median = arr[arr.length / 2] + arr[arr.length / 2 - 1];
        median /= 2;
    } else {
        var i = 0;
        while (i < arr.length / 2 - 1) {
            i++;
        }

        median = arr[i];
    }

    return median
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5