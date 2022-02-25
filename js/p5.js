


function countVowels (str) {
    const vowels = ["a", "e", "i", "o", "u", "y"]
    let count=0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
           count++;
        }
    }
}



function checkPalindrome(string) {
    const len = string.length;

    for (let i = 0; i < len/2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'and it is not a palindrome';
        }
    }
    return 'and it is a Palindrome';
}



