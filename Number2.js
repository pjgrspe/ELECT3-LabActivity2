const readline = require('readline');

//Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to check if a word is a palindrome
function isPalindrome(str) {
    //Convert the string to lowercase so it's not case-sensitive
    const lowerStr = str.toLowerCase();
    //Reverse the string
    const reversedStr = lowerStr.split('').reverse().join('');
    //See if the original string matches the reversed one
    return lowerStr === reversedStr;
}

//Main function to encapsulate the logic
function main() {
    //Prompt the user to enter a word
    rl.question("Enter the word you want to check: ", function(word) {
        //Validate the input to make sure it's a word and not a number
        if (!word || !isNaN(word)) {
            console.log("Invalid input! Please enter a valid word.");
        } else {
            //Check if the word is a palindrome and give the result
            if (isPalindrome(word)) {
                console.log(`The word ${word} is a palindrome!`);
            } else {
                console.log("The word you've entered is not a palindrome!");
            }
        }

        //Close the readline interface
        rl.close();
    });
}

//Call the main function to execute the program
main();
