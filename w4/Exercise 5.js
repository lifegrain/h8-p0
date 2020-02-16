function ubahHuruf(kata) {
    var output = "";

    for (var i = 0; i < kata.length; i++) {
        switch (kata[i]) {
            case `z`:
                output += `a`;
                break;
        
            default:
                output += String.fromCharCode(kata[i].charCodeAt(0) + 1)
                break;
        }
    }

    return output
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu