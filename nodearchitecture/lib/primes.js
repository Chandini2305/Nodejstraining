

let isPrimeSync = function (number) {
    if (number < 2)
        return false;

    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;

    return true;
}

let findPrimesSync = function (min, max) {

    if (max < min)
        return null;

    let result = [];
    for (let i = min; i < max; i++)
        if (isPrimeSync(i))
            result.push(i);

    return result;

}

//third paramter is callback function
//which will be called when function completes
let _findPrimes = function (min, max, cb) {

    if (max < min)
        return cb(`invalid range ${max}<${min}`); //you are send an error

    let results = [];
    for (let i = min; i < max; i++) {
        if (isPrimeSync(i))
            results.push(i);
    }

    cb(null, results); //first parameter null indicates no error

}


//find next prime after this number
let nextPrimeSync = function (value) {

    while (!isPrimeSync(value))
        value++;

    return value;

}


//uses nodejs callback
let findPrimes = function (min, max, id, cb) {

    let number = min;
    let result = [];

    if (max < min)
        return cb(`invalid range ${max}<${min}`, id); //you are send an error


    let timerId = setInterval(() => {

        let prime = nextPrimeSync(number); //find next prime
        if (prime >= max) {
            clearInterval(timerId); //no need to run further
            return cb(null, { result, id });
        }

        result.push(prime);
        number = prime + 1;


    }, 10); //run this function every 10 ms



}

//uses es2015 promise
let getPrimesAsync = function (min, max, id) {

    let number = min;
    let result = [];

    let promise = new Promise(function (resolve, reject) {

        if (max < min)
            return reject(`invalid range ${max}<${min} in jobId ${id}`); //return failure

        let timerId = setInterval(() => {

            let prime = nextPrimeSync(number); //find next prime
            if (prime >= max) {
                clearInterval(timerId); //no need to run further
                return resolve({ result, id });
            }

            result.push(prime);
            number = prime + 1;


        }, 10); //run this function every 10 ms



    });

    return promise; //promise is returned immediately. it will be resolved/rejected later

}

let { EventEmitter } = require('events'); //predeifned node module

//uses nodejs events
let fetchPrimes = function (min, max, id) {


    let number = min;
    let index=0;
    
    let event = new EventEmitter();

    if (max < min) {
        //emit event called error, with given value
        event.emit('invalidinput', `invalid range ${max}<${min} in jobId ${id}`);
    }
    else {

        let timerId = setInterval(() => {

            let prime = nextPrimeSync(number); //find next prime
            index++;
            if (prime >= max) {
                clearInterval(timerId); //no need to run further
                //return resolve({ result, id });
                event.emit('end', {id, total:index});
            }
            else{
                event.emit('prime', {prime,id,index});
                number = prime + 1;
            }


        }, 10); //run this function every 10 ms
    }


    return event;

}



module.exports = {
    isPrimeSync,
    findPrimesSync,
    getPrimesAsync,
    fetchPrimes,
    findPrimes
};

