function urutkanAbjad(str) {
    var container = [];
    var output = ``;

    // convert str to number in array
    for (var i = 0; i < str.length; i++) {
        container.push(str[i].charCodeAt());
    }

    // sort the numbers
    for (var i = 0; i < container.length - 1; i++) {

        var alphabet = i;

        for (var j = i + 1; j < container.length; j++) {

            if (container[j] < container[alphabet] ) {
                alphabet = j;
            }
        }

        var temp = container[alphabet];
        container[alphabet] = container[i];
        container[i] = temp
    }

    // convert the sorted numbers back into string
    for (var i = 0; i < container.length; i++) {
        output += String.fromCharCode(container[i]);
    }

    return output
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'