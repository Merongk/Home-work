// Define the formula for calculating the house price
const calculateHousePrice = (width, height, depth, gardenSize) => {
    const volumeInMeters = width * height * depth;
    return volumeInMeters * 2.5 * 1000 + gardenSize * 300;
};

// Define Peter's house details
const peterWidth = 8;
const peterHeight = 10;
const peterDepth = 10;
const peterGardenSize = 100;
const peterActualPrice = 2500000;

// Calculate the expected price for Peter's house
const peterExpectedPrice = calculateHousePrice(peterWidth, peterHeight, peterDepth, peterGardenSize);

// Define Julia's house details
const juliaWidth = 5;
const juliaHeight = 8;
const juliaDepth = 11;
const juliaGardenSize = 70;
const juliaActualPrice = 1000000;

// Calculate the expected price for Julia's house
const juliaExpectedPrice = calculateHousePrice(juliaWidth, juliaHeight, juliaDepth, juliaGardenSize);

// Compare the expected and actual prices for both houses
if (peterActualPrice > peterExpectedPrice) {
    console.log("Peter is paying too much for the house.");
} else if (peterActualPrice < peterExpectedPrice) {
    console.log("Peter is paying too little for the house.");
} else {
    console.log("Peter is paying the right price for the house.");
}

if (juliaActualPrice > juliaExpectedPrice) {
    console.log("Julia is paying too much for the house.");
} else if (juliaActualPrice < juliaExpectedPrice) {
    console.log("Julia is paying too little for the house.");
} else {
    console.log("Julia is paying the right price for the house.");
}
