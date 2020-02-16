function dataHandling2(input) {
    var addition = ["Pria", "SMA Internasional Metro"];
    var date = input[3].split("/");
    var output;

    // Splice
    input.splice(1, 1, `${input[1]} Elsharawy`);
    input.splice(2, 1, `Provinsi ${input[2]}`);
    input.splice(5,0, addition[0], addition[1]);
    console.log(input);

    //Bulan
    switch (date[1]) {
        case "01":
            console.log("Januari")
            break;
        case "02":
            console.log("Februari")
            break;
        case "03":
            console.log("Maret")
            break;
        case "04":
            console.log("April")
            break;
        case "05":
            console.log("Mei")
            break;
        case "06":
            console.log("Juni")
            break;
        case "07":
            console.log("Juli")
            break;
        case "08":
            console.log("Agustus")
            break;
        case "09":
            console.log("September")
            break;
        case "10":
            console.log("Oktober")
            break;
        case "11":
            console.log("November")
            break;
        case "12":
            console.log("Desember")
            break;
    }

    // sort
    console.log(date.sort((a, b) => b - a));

    // join
    date = input[3].split("/");
    console.log(date.join("-"));

    // slice
    console.log(input[1].slice(0,14))
    
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);