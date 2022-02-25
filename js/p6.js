let num=Math.floor(Math.random() * 100);

var gnum =prompt("Guess the number between 1 and 100 inclusive: ");


count = 0
while (num !== gnum) {
    count++;
    if (gnum>num) {
        num=prompt('Too high, guess again');
    }
    else if (gnum<num) {
        num=prompt('Too low, guess again');
    }
    
} 

gnum=prompt(`Correct! It took you ${count} attempts to guess the correct number`)

console.log(gnum);