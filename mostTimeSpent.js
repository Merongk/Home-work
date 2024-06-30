import { activities } from './addActivity.js';

export function mostTimeSpent() {
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
