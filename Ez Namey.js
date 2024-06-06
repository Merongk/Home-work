// Define the arrays of first and second words for startup names
const firstWords = ["Easy", "Awesome", "Corporate", "Innovative", "Tech", "Global", "Creative", "Bright", "Dynamic", "Genius"];
const secondWords = ["Solutions", "Labs", "Ventures", "Tech", "Co", "World", "Innovations", "Network", "Hub", "Group"];

// Generate a random index for selecting words from the arrays
const randomFirstIndex = Math.floor(Math.random() * firstWords.length);
const randomSecondIndex = Math.floor(Math.random() * secondWords.length);

// Create the startup name by concatenating words from the arrays
const startupName = firstWords[randomFirstIndex] + " " + secondWords[randomSecondIndex];

// Calculate the number of characters in the startup name
const numberOfCharacters = startupName.length;

// Log the startup name and the number of characters in it
console.log(`The startup: "${startupName}" contains ${numberOfCharacters} characters.`);
