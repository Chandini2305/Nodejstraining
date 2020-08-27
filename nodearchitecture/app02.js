
let {findPrimes} = require('./lib/primes');

function resultHandler(error,result){
    if(error)
        return console.log(`error in job#${result}: ${error}`);

    console.log(`total primes found for job#${result.id} is ${result.result.length}`);
}

console.log('program starts');

findPrimes(2,20000,1,resultHandler);
console.log('task1 submitted');


findPrimes(2,5000,2,resultHandler);
console.log('task2 submitted');
