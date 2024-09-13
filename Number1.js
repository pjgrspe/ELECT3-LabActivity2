const readline = require('readline');

//Function to reverse the given full name
function reverseName(fullName) {
    return fullName.split('').reverse().join('');
}

//Function to calculate the age based on the birth year
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

//Function to validate the full name
function isValidName(name) {
    return /^[a-zA-Z\s]+$/.test(name.trim());
}

//Function to validate the birth year
function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return !isNaN(year) && year > 1900 && year <= currentYear;
}

//Main function to prompt user input and display the results
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //Ask the user to enter full name and birth year
    rl.question("Enter your full name: ", (fullName) => {
        if (!isValidName(fullName)) {
            console.log("Invalid name. Please enter a valid full name containing only alphabetic characters and spaces.");
            rl.close();
            return;
        }

        rl.question("Enter your birth year: ", (birthYear) => {
            const birthYearInt = parseInt(birthYear, 10);
            if (!isValidYear(birthYearInt)) {
                console.log("Invalid birth year. Please enter a valid year between 1900 and the current year.");
                rl.close();
                return;
            }

            //Use reverseName function
            const reversedName = reverseName(fullName);
            //Use calculateAge function
            const age = calculateAge(birthYearInt);

            //Display the result
            console.log(`Your name is ${fullName} and its reversed version is ${reversedName}. Your age is ${age} years old.`);

            rl.close();
        });
    });
}

main();
