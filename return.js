// function dilog (clip){
//     const gurni = clip * 3;
//     // console.log(gurni);
//     return gurni;
// }
// const output = dilog(4);
// console.log(output);

// dilog(6);
// const result = dilog(7);
// console.log(result);

// function myage (age){
//     const number = age / 2;
//     console.log(number);
// }
// myage(8);
// const fatherage = myage(30);
// console.log(fatherage);

// function egg (num1, num2){
//   return num1 +  num2;
// }
// const addegg = egg(3, 4);
// console.log(addegg);

// ---------------------------------------

// function add(price1, price2){
//     const total = price1 + price2;
//     return total;
// }
// const bill = add(2, 3);
// console.log(bill);

// ----do meth-----------------

function dometh (num1, num2){
    const sum = num1 + num2;
    const sub = num1 - num2;
    const multiply = sum * sub;
    const result = multiply / 2;
    return multiply;
}
// const price = dometh(20, 10);
// console.log(dometh(30, 10));

//------------------------- funtion condition vs return --------------
function program (number){
    if (number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(program(30));