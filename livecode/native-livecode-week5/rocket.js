/**
 * Buatlah sebuah function yang akan mengambil input berupa array multidimensi berisi kumpulan angka.
 * Function akan mencari nilai mean, modus, max dari masing-masing array di dalam array multidimensi tersebut.
 * Masing-masing mean, modus, dan max dari array-array tersebut akan disimpan di dalam 1 array.
 * 
 * Jika terdapat 2 modus di dalam 1 array, maka modus di array tersebut adalah modus yang terkecil!!!
 * 
 * contoh input: [[1,2,3,4], [5,6,5,7]]
 * contoh output:[[mean, modus, max], [mean,modus,max]]
 *               [ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

function findSpecials(array) {
    var group = {
        mean : 0,
        modus : 0,
        max : 0
    };
    var output = [];

    for (var i = 0; i < array.length; i++) {
        group.mean = 0;
        group.modus = 0;
        group.max = 0;

        
        var unique = [];
        var flag = false;
        var modus;

        var max = 0;

        for (var j = 0; j < array[i].length; j++) {

            //Sum of numbers
            group.mean += array[i][j];

            //find modus
            for (var k = 0; k < unique.length; k++) {
                if (unique[k][0] === array[i][j]) {
                    flag = true;
                }
            }

            if (!flag) {
                unique.push([array[i][j], 0]);
            }

            for (var k = 0; k < unique.length; k++) {
                if (unique[k][0] === array[i][j]) {
                    unique[k][1]++;
                }
            }

            for (var k = 0; k < unique.length; k++) {
                for (var l = k; l < unique.length; l++) {
                    if (unique[l][1] > unique[k][1]) {
                        modus = unique[l][1];
                    } else if (unique[l][1] === unique[k][1] && unique[l][0] > unique[k][0]) {
                        modus = unique[k][1];
                    } else if (unique[l][1] === unique[k][1] && unique[k][0] > unique[l][0]) {
                        modus = unique[l][1];
                    }
                }
            }
        }

        for (var j = 0; j < array[i].length; j++) {
            for (var k = j; k < array[i].length; k++) {
                if (array[i][j] > array[i][k]) {
                    max = array[i][j];
                }
            }
        }


        group.mean /= array[i].length;
        group.modus = modus;
        group.max = max;

        output.push([
            group.mean,
            group.modus,
            group.max
        ])
    }
    

    return output;
}


//test-cases
console.log(findSpecials([[2,2,2,4,5,6,8,9],[2,2,2,0,9],[3,4,5,8,8,8,3,3,2,10]]));
//[ [ 4.75, 2, 9 ], [ 3, 2, 9 ], [ 5.4, 3, 10 ] ]

console.log(findSpecials([[1,2,3,4], [5,6,5,7]]))
//[ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]