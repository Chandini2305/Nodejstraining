
//function syntax
function isPrime(number){

    if(number<2){
        return false;
    }

    for(var x=2;x<number;x++)
        if(number%x===0){
            return false;
        }

    return true;
    
}

//function object syntax
let  findPrimes=function(min,max){

    if(max===undefined){
        max=min
        min=2
    }

    let result=[]; //an empty list

    for(let number=min; number<max; number++)
        if (isPrime(number))
            result.push(number);

    return result;
}



let primes50_100= findPrimes(50,100);
console.log('all primes between 50 and 100 is ', primes50_100);


let primes200=findPrimes(200); 


console.log('all primes under 200 is ', primes200)

