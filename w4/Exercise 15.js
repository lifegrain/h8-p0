function highestScore (students) {
    var classes = [];
    var output = {};

    // find class set
    for (var i = 0; i < students.length; i++) {
        var flag = false;

        for (var j = 0; j < classes.length; j++) {
            if (students[i].class === classes[j]) {
                flag = true;
            }
        }

        if (!flag) {
            classes.push(students[i].class);
        }

    }

    // setup output
    for (var i = 0; i < classes.length; i++) {
        output[classes[i]] = {
            name: undefined,
            score: 0
        }

        // find highest in the class then insert it to output
        for (var j = 0; j < students.length; j++) {
            if (students[j].class === classes[i] && students[j].score > output[classes[i]].score) {
                output[classes[i]].name = students[j].name;
                output[classes[i]].score = students[j].score;
            }
        }
    }

    return output
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}