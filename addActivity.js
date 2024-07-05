// const productivityScores = {
//     'Work': 10,
//     'Exercise': 8,
//     'Leisure': 5,
//     'Learning': 9,
//     'Other': 4
// };

const currentActivityies = [{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 130,
},
{
    date: '23/7-18',
    activity: 'Reading',
    duration: 10,
},
{
    date: '23/7-18',
    activity: 'Swimming',
    duration: 50,
},
{
    date: '23/7-18',
    activity: 'dancing',
    duration: 35,
}
]

// function addActivity(name, category, duration) {
//     const date = new Date().toISOString().split('T')[0];
//     const score = productivityScores[category] ? productivityScores[category] * duration : 0;
//     activities.push({ name, category, duration, date, score });
// }

function findLongestActivity(activities) {
    let maxDurationActivity = 0;

    for (let index = 0; index < activities.length; index++) {
        if (activities[index].duration > maxDurationActivity) {
            maxDurationActivity = activities[index].duration
        }        
    }
    return maxDurationActivity;
}

console.log(findLongestActivity(currentActivityies));