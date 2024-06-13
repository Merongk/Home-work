// event.js

// Function to calculate the weekday of an event
function getEventWeekday(daysUntilEvent) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay(); // Get the current day index (0-6)
    const eventDayIndex = (today + daysUntilEvent) % 7; // Calculate the day index of the event
    return weekdays[eventDayIndex]; // Return the weekday name
}

// Example usage:
console.log(getEventWeekday(9)); // Logs out "Thursday" if today is Tuesday
console.log(getEventWeekday(2)); // Logs out "Sunday" if today is Friday
