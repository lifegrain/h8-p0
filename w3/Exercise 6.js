function angkaPalindrome(num) {
    var flag = false;

   do {

        num++
        var str = `${num}`;
        var invert = "";

        for (var i = str.length - 1; i >= 0; i--) {
            invert += str[i];
        }

        if (invert == str) {
            flag = true
        }

    } while (flag === false)

    return num
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001