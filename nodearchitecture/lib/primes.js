

let isPrimeSync = function(number){
    if (number<2)
        return false;

    for(let i=2;i<number;i++)
        if (number%i===0)
            return false;

    return true;
}

let findPrimesSync=function(min,max){

    if(max<min)
        return null;

    let result=[];
    for(let i=min;i<max;i++)
        if(isPrimeSync(i))
            result.push(i);

    return result;

}

//third paramter is callback function
//which will be called when function completes
let _findPrimes=function(min,max,cb){

    if(max<min)
        return cb(`invalid range ${max}<${min}`); //you are send an error

    let results=[];
    for(let i=min;i<max;i++){
        if(isPrimeSync(i))
            results.push(i);
    }

    cb(null, results); //first parameter null indicates no error

}


//find next prime after this number
let nextPrimeSync=function(value){

    while(! isPrimeSync(value))
        value++;

    return value;

}

let findPrimes=function(min,max,id,cb){

    let number=min;
    let result=[];
    
    if (max<min)
        return cb(`invalid range ${max}<${min}`, id); //you are send an error


    let timerId=setInterval( ()=>{

       let prime=nextPrimeSync(number); //find next prime
       if (prime>=max){
            clearInterval(timerId); //no need to run further
            return cb(null, {result,id});
       }

        result.push(prime);
        number=prime+1;      


    }, 10); //run this function every 10 ms



}




module.exports={
    isPrimeSync,
    findPrimesSync,
    findPrimes
};

