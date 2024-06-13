const boughtCandyPrices = []; // Array to store candy prices

function addCandy(candyType, weight) {
  let pricePerGram = 0;
  
  // Determine price per gram based on candy type
  switch (candyType) {
    case 'sweet':
      pricePerGram = 0.5;
      break;
    case 'chocolate':
      pricePerGram = 0.7;
      break;
    case 'toffee':
      pricePerGram = 1.1;
      break;
    case 'chewing-gum':
      pricePerGram = 0.03;
      break;
    default:
      console.log(`Invalid candy type: ${candyType}`);
      return; // Exit function if candy type is invalid
  }
  
  // Calculate total price of this candy
  const totalPrice = pricePerGram * weight;
  
  // Add the price to the array
  boughtCandyPrices.push(totalPrice);
  
  console.log(`Added ${totalPrice} to boughtCandyPrices`);
}

function canBuyMoreCandy() {
    const amountToSpend = Math.random() * 100; // Random amount to spend (0 to 100)
    let totalSpent = 0;
  
    // Calculate total spent from boughtCandyPrices array
    for (let price of boughtCandyPrices) {
      totalSpent += price;
    }
  
    // Check if remaining amount is enough to buy more candy
    if (totalSpent < amountToSpend) {
      console.log("You can buy more, so please do!");
      return true;
    } else {
      console.log("Enough candy for you!");
      return false;
    }
  }

  // Add some candies
addCandy("sweet", 20); // Adds the price of 20 grams of sweets
addCandy("chocolate", 15); // Adds the price of 15 grams of chocolate
addCandy("toffee", 30); // Adds the price of 30 grams of toffee

// Check if we can buy more candy
canBuyMoreCandy();

  