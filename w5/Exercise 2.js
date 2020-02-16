function changeVocals (str) {
    var output = ``;

    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case `a`:
                output += `b`;
                break;
            
            case `i`:
                output += `j`;
                break;

            case `u`:
                output += `v`;
                break;

            case `e`:
                output += `f`;
                break;

            case `o`:
                output += `p`;
                break;

            case `A`:
                output += `B`;
                break;

            case `I`:
                output += `J`;
                break;

            case `U`:
                output += `V`;
                break;

            case `E`:
                output += `F`;
                break;

            case `O`:
                output += `P`;
                break;

            default:
                output += str[i];
                break;
        }
    }

    return output;
  }
  
  function reverseWord (str) {
    var output = '';

    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }

    return output;
  }
  
  function setLowerUpperCase (str) {
    var output = ``;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            output += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            output += str[i].toLowerCase();
        }
    }

    return output;
  }
  
  function removeSpaces (str) {
    var output = ``;

    for (var i = 0; i < str.length; i++) {
        if (str[i] != ` `) {
            output += str[i];
        }
    }

    return output;
  }
  
  function passwordGenerator (name) {

    if (name.length < 5) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`
    }

    var output = changeVocals(name);
    output = reverseWord(output);
    output = setLowerUpperCase(output);
    output = removeSpaces(output);

    return output;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'