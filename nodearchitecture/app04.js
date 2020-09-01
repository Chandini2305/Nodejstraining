let {getPrimesAsync}=require('./lib/primes');




//a function that has an await should be marked async
async function testPrimes(min,max){

    let id=`getPrimes(${min},${max})`;    
    console.log('starting job:', id);

    try{
       
        let r= await getPrimesAsync(min,max,id); //await in ES2015 keyword to resolve promise
     
        //the function is returning a resolved promise not a pending
        console.log(r.id, r.result.length);  //do the then()
    }catch(error){
        //when promise is rejected
        console.log('error',error);
    }
    
}



testPrimes(2,3000); //success
testPrimes(100,5); //error
testPrimes(2,1500);