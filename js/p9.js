let x = 7;

function myFunction(x) {
    x = 10;
    console.log(`x = ${x}`);
    return x;
}

console.log(`x = ${x}`);
x = myFunction(x);
console.log(`x = ${x}`);

// x=7 
// x=10 
// x=10