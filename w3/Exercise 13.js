function targetTerdekat(arr) {
    var exist = [0, 0];
    var distance = [];
    var output;

    // Check if both X and O exist
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === `x`) {
            exist[0] = 1;
        } else if (arr[i] === `o`) {
            exist[1] = 1;
        }
    }

    if (exist[0] === 0 || exist[1] === 0) {
        return 0
    }

    //Check each distance
    for (var i = 0; i < arr.length; i++) {

        // if find "x" and count until find "o"
        if (arr[i] === `x`) {
            distance.push(0);
            for (var j = i + 1; j < arr.length; j++) {

                if (arr[j] != `o` && arr[k] != `x`) {
                    distance[distance.length - 1]++;
                } else if (arr[j] === `o`) {
                    distance[distance.length - 1]++;
                    break;
                }
            }
        }
        
        // if find "o" and count until find "x"
        if (arr[i] === `o`) {
            distance.push(0);
            for (var k = i + 1; k < arr.length; k++) {

                if (arr[k] != `x` && arr[k] != `o`) {
                    distance[distance.length - 1]++;
                } else if (arr[k] === `x`) {
                    distance[distance.length - 1]++;
                    break;
                }
            }
        }
    }

    //find smallest distance and put it into output
    output = distance[0];
    for (var i = 0; i < distance.length; i++) {
        if (output > distance[i] && distance[i] != 0) {
            output = distance[i];
        }
    }

    return output
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2