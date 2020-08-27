
let {findPrimesSync} = require('./lib/primes');


result=findPrimesSync(2,200000);
console.log('task1 submitted');
console.log('result',result);



result2=findPrimesSync(2,50000);
console.log('task2 submitted');
console.log('result',result2);