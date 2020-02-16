function cariModus(arr) {
    var numbers = [[arr[0], 1]];
    var modus = numbers[0];

    // find unique number set
    for (var i = 1; i < arr.length; i++) {
        var flag = false;
        for (var j = 0; j < numbers.length; j++) {
            if (arr[i] === numbers[j][0]) {
                flag = true;
                numbers[j][1]++
            }
        }

        if (!flag) {
            numbers.push([arr[i], 1]);
        }
    }

    // check if if there is no modus or if all number is the same number
    if (numbers.length === arr.length || numbers.length === 1) {
        return -1
    }

    // find modus
    for (var i = 0; i < numbers.length; i++) {
        if (modus[1] < numbers[i][1]) {
            modus = numbers[i];
        }
    }

    return modus[0]
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1