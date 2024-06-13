// weatherWear.js

// Function on suggesting clothings based on the weather
function suggestClothes(temperature) {
    if (temperature >= 25) {
        return "You should wear shorts and a t-shirt.";
    } else if (temperature >= 18 && temperature < 25) {
        return "You should wear jeans and a light sweater.";
    } else if (temperature >= 10 && temperature < 18) {
        return "You should wear a jacket and jeans.";
    } else {
        return "You should wear a warm jacket, hat, and gloves.";
    }
}

const temperature = 18;
const clothesToWear = suggestClothes(temperature);
console.log(clothesToWear); // Logs out: "light jacket and jeans"
