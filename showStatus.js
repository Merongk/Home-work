import { activities } from './addActivity.js';

export function showStatus() {
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
