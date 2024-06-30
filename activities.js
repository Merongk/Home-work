// List to store activities
const activities = [];

// Dictionary to store productivity scores for different categories
const productivityScores = {
    'Work': 10,
    'Exercise': 8,
    'Leisure': 5,
    'Learning': 9,
    'Other': 4
};

function addActivity(name, category, duration) {
    const date = new Date().toISOString().split('T')[0];
    const score = productivityScores[category] ? productivityScores[category] * duration : 0;
    activities.push({ name, category, duration, date, score });
}

function showStatus() {
    const today = new Date().toISOString().split('T')[0];
    const todayActivities = activities.filter(activity => activity.date === today);
    const numActivities = todayActivities.length;
    const totalScore = todayActivities.reduce((sum, activity) => sum + activity.score, 0);
    const totalDuration = todayActivities.reduce((sum, activity) => sum + activity.duration, 0);

    console.log(`You have added ${numActivities} activities. They amount to ${totalDuration} min. of usage`);
    console.log(`Total productivity score for today: ${totalScore}`);

    todayActivities.forEach(activity => {
        console.log(`Activity: ${activity.name}, Category: ${activity.category}, Duration: ${activity.duration} minutes, Score: ${activity.score}`);
    });
}

function mostTimeSpent() {
    const activityTime = {};
    activities.forEach(activity => {
        if (activityTime[activity.name]) {
            activityTime[activity.name] += activity.duration;
        } else {
            activityTime[activity.name] = activity.duration;
        }
    });

    if (Object.keys(activityTime).length === 0) {
        console.log("No activities recorded.");
        return null;
    }

    const mostTimeSpentActivity = Object.keys(activityTime).reduce((a, b) => activityTime[a] > activityTime[b] ? a : b);
    console.log(`Activity with the most time spent: ${mostTimeSpentActivity} with ${activityTime[mostTimeSpentActivity]} minutes`);
    return mostTimeSpentActivity;
}

// Example usage
addActivity('Reading', 'Leisure', 30);
addActivity('Exercise', 'Exercise', 45);
addActivity('Work on Project', 'Work', 120);
addActivity('Online Course', 'Learning', 60);

showStatus();
mostTimeSpent();
