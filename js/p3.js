const values = [3, 11, 7, 2, 9, 10];

var sum = values.reduce(function(a,b) {
    return a+b;
})

var max= values.reduce(function(a,b) {
    return Math.max(a,b);
});

var min= values.reduce(function(a,b) {
    return Math.min(a,b);
})

console.log(max)
console.log(min)
console.log(sum)