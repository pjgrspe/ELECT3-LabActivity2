const readline = require('readline');

//Function to generate and display the multiplication table
function generateMultiplicationTable(n) {
    console.log("Multiplication Table:");
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j) + "\t"; //Get each cell value and add it to the row
        }
        console.log(row); //Print the current row
    }
}

//Function to calculate the factorial of a number
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1; //If it's 0 or 1, factorial is just 1, easy peasy
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i; //Keep multiplying to get the factorial
    }
    return factorial; //Return the result when you're done
}

//Main function to handle user input and show results
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //Ask the user to enter a number
    rl.question("Enter the number you want to generate: ", (input) => {
        const n = parseInt(input, 10);

        //Check if the input is a positive number
        if (isNaN(n) || n <= 0) {
            console.log("Oops! Please enter a valid positive number.");
            rl.close(); //Close the input if the number is invalid
            return;
        }

        //Create and show the multiplication table up to n
        generateMultiplicationTable(n);

        //Print the factorials of numbers from 1 to n
        console.log("\nFactorials:");
        for (let i = 1; i <= n; i++) {
            console.log(`${i}! = ${calculateFactorial(i)}`);
        }

        rl.close(); //All done, so close the input
    });
}

//Run the program
main();
