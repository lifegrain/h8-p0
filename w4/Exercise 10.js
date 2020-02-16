function changeMe(arr) {
    var fullname;
    var info = {};
    var key = [`firstName`, `lastName`, `gender`, `age`]
    var date = new Date();
    date = date.getFullYear();
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length - 1; j++) {
            fullname = `${arr[i][0]} ${arr[i][1]}`

            info[key[j]] = arr[i][j];
        }
        
        if (arr[i][3] > date || !arr[i][3]) {
            info.age = `Invalid Birth Year`;
        } else {
            info.age = date - arr[i][3] - 1;
        }
        
        console.log(fullname + `:`, info);
    }

    
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""