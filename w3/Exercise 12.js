function tentukanDeretGeometri(arr) {
    var diff = arr[1] / arr[0];
    var flag = true;

    for (var i = 1; i < arr.length - 1; i++) {
        if (diff != arr[i + 1] / arr[i]) {
            flag = false;
        }
    }

    return flag
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false