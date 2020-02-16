function shoppingTime(memberId, money) {
    var output = {
        memberId : memberId,
        money : money,
        listPurchased : [],
        changeMoney : undefined
    };

    var product = [
        {name: 'Sepatu Stacattu', price: 1500000},
        {name: `Baju Zoro`, price: 500000},
        {name: `Baju H&N`, price: 250000},
        {name: `Sweater Uniklooh`, price: 175000},
        {name: `Casing Handphone`, price: 50000}
    ]

    // Check if Money is enough or if ID is filled in
    if (money < product[product.length-1].price) {
        return `Mohon maaf, uang tidak cukup`
    } else if (!memberId) {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }

    // Find product that can be bought and push it into listpurchased
    for (var i = 0; i < product.length; i++) {
        if (money >= product[i].price) {
            money -= product[i].price;
            output.listPurchased.push(product[i].name);
        }
    }

    output.changeMoney = money;

    return output
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja