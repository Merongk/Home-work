export const activities = [];

const productivityScores = {
    'Work': 10,
    'Exercise': 8,
    'Leisure': 5,
    'Learning': 9,
    'Other': 4
};

export function addActivity(name, category, duration) {
    const date = new Date().toISOString().split('T')[0];
    const score = productivityScores[category] ? productivityScores[category] * duration : 0;
    activities.push({ name, category, duration, date, score });
}
