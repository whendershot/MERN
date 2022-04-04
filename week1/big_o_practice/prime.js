Number.prototype.isPrime = function() {
        for( let i=2, rt = Math.round(Math.sqrt(this)); i<this && i<=rt; i++ ) {
            if( this % i === 0 ) {
                return false;
            }
        }
        return true;
    }
    
const { performance } = require('perf_hooks');
let start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

start = performance.now();
primeCount = 0;
num = 2;
while( primeCount < 1e5 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

start = performance.now();
primeCount = 0;
num = 2;
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);