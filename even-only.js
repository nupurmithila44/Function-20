// create function that will return only the even numbers
// return the sum of even numbers 

function evenNumberOnly (numbers){
    // console.log(numbers)
   const evens = [];
   for( const number of numbers){
    if(number % 2 === 0){
        evens.push(number);
       
    }
    
   }
   return evens;

}

const num =[ 22, 32, 45, 32, 67 ];
const evens = evenNumberOnly(num)
console.log(evens);