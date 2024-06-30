import { addActivity } from './addActivity.js';
import { showStatus } from './showStatus.js';
import { mostTimeSpent } from './mostTimeSpent.js';

// Example usage
addActivity('Reading', 'Leisure', 30);
addActivity('Exercise', 'Exercise', 45);
addActivity('Work on Project', 'Work', 120);
addActivity('Online Course', 'Learning', 60);

showStatus();
mostTimeSpent();
