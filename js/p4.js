let words = [];

while (true) {
    let input = prompt("Add a word or type 'stop' to quit: ")
 
    if (input.toLowerCase() === "stop" && words.length === 0) {
        console.log(`No words to display, stop was the first word entered.`);
        break;
    }
    
    else if (input.toLowerCase() === "stop") {
        console.log(`You have entered the following word(s): ${words}`);
        break;
    }
    else {
        words.push(input);
    }
}