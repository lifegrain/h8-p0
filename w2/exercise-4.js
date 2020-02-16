var hari = 21; var bulan = 1; var tahun = 1945;

if (1 > hari || hari > 31) {
    console.log("Tolong Masukan Hari [1-31]!");
}
else if (1 > bulan || bulan > 12) {
    console.log("Tolong Masukan bulan [1-12]!");
}
else if (1900 > tahun || tahun > 2200) {
    console.log("Tolong Masukan tahun [1900-2200]!");
}
else if(1 <= hari <= 31 && 1 <= bulan <= 12 && 1900 <= tahun <= 2200) {
    switch (bulan) {
        case 1:
            console.log(hari + " January " + tahun);
            break;
        case 2:
            console.log(hari + " Februari " + tahun);
            break;
        case 3:
            console.log(hari + " Maret " + tahun);
            break;
        case 4:
            console.log(hari + " April " + tahun);
            break;
        case 5:
            console.log(hari + " Mei " + tahun);
            break;
        case 6:
            console.log(hari + " Juni " + tahun);
            break;
        case 7:
            console.log(hari + " Juli " + tahun);
            break;
        case 8:
            console.log(hari + " Agustus " + tahun);
            break;
        case 9:
            console.log(hari + " September " + tahun);
            break;
        case 10:
            console.log(hari + " Oktober " + tahun);
            break;
        case 11:
            console.log(hari + " November " + tahun);
            break;
        case 12:
            console.log(hari + " Desember " + tahun);
            break;
    }
}