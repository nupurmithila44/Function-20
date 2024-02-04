function sumOfNumbers (numbers){

    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [23, 43, 45, 22, 54];
const sum = sumOfNumbers(numbs);
console.log (sum);
