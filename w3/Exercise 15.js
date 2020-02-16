function groupAnimals(animals) {
    var output = [];
    var initials = [];
    var unique = [];

    // find initials
    for (var i = 0; i < animals.length; i++) {
        initials.push(animals[i][0]);
    }

    for (var i = 0; i < initials.length; i++) {
        var status = false;
        for (var j = 0; j < unique.length; j++){
            if (unique[j] === initials[i]) {
                status = true;
            }
        }
        if (status === false) {
            unique.push(initials[i]);
        }
    }

    unique.sort()

    // grouping into output
    for (var i = 0; i < unique.length; i++) {
        output.push([]);
        for (var j = 0; j < animals.length; j++) {
            if (unique[i] === animals[j][0]) {
                output[i].push(animals[j])
            }
        }
    }

    return output
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]