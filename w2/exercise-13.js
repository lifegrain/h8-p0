function xo(str) {
    var letters = [str[0]];
    var output = [];

    for (var i = 1; i < str.length; i++) {
        var status = false;
        for (var j = 0; j < letters.length; j++){
            if (letters[j] === str[i]) {
                status = true;
            }
        }
        if (status === false) {
            letters.push(str[i]);
        }
    }

    // if (x === o) {
    //     return true
    // } else {
    //     return false
    // }

    for (var i = 0; i < letters.length; i++) {
        output.push(0);
        for (var j = 0; j < str.length; j++) {
            if (letters[i] === str[j]) {
                output[i]++;
            }
        }
    }

    return letters
}


console.log(xo('xxzzooaaabbbdddddd')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true