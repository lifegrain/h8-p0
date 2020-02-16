function tentukanDeretAritmatika(arr) {
    var diff = arr[0] - arr[1];
    var flag = true;

    for (var i = 1; i < arr.length - 1; i++) {
        if (diff != arr[i] - arr[i + 1]) {
            flag = false;
        }
    }

    return flag
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false