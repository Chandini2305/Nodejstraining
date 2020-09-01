let {getPrimesAsync}=require('./lib/primes');



function testPrimes(min,max){

    let id=`getPrimes(${min},${max})`;    
    console.log('starting job:', id);

    let promise= getPrimesAsync(min,max,id);
    
    promise
        .then( r=> console.log(r.id, r.result.length))
        .catch(e=>console.log('error',e));

    
}



testPrimes(2,30000); //success
testPrimes(100,5); //error
testPrimes(2,14000);