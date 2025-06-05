const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, '..', 'tasks.json');

function readTasks() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function writeTasks(tasks) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };