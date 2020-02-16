function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var rate = 2000;
    var station = 0;
    var output = [];

    for (var i = 0; i < arrPenumpang.length; i++) {
        
        // Fill in info of user to output
        output.push({
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            bayar : 0
        })

        // count how far user travelled
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === output[i].naikDari) {
                for (var k = j + 1; k < rute.length; k++) {
                    if (rute[k] === output[i].tujuan) {
                        station++;
                        break
                    } else {
                        station++;
                    }
                }
            }

            // if station is not 0 (user has travelled) then calculate pay
            if (station) {
                output[i].bayar = rate * station;
                station = 0;
                break
            }
        }
    }

    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]