const readline = require('readline');

//Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to check if the input is a valid integer or a string
function isValidNumberOrString(value) {
    const parsedValue = parseFloat(value);
    //Check if the value is a string (non-numeric) or a valid integer
    return isNaN(value) || (Number.isInteger(parsedValue) && !isNaN(parsedValue));
}

//Main function to encapsulate the logic
function main() {
    //Prompt the user to enter a number or string
    rl.question("Enter a number or a string to check: ", function(input) {
        //Validate the input
        if (!isValidNumberOrString(input)) {
            console.log("Error: Please enter an integer or a string.");
        } else {
            const number = parseInt(input, 10);
            //Check if the input is a number and whether it's odd or even
            if (!isNaN(number)) {
                if (number % 2 === 0) {
                    console.log(`${number} -> Jolly`);
                } else {
                    console.log(`${number} -> Bee`);
                }
            } else {
                //Handle string input
                console.log(`Jollibee`);
            }
        }

        //Close the readline interface
        rl.close();
    });
}

//Call the main function to execute the program
main();