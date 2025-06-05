const { readTasks, writeTasks } = require('../models/taskModel');

// this controller handles task-related operations
function getTasks(req, res) {
    let tasks = readTasks();
    const { status } = req.query;
    if (status === 'completed') {
        tasks = tasks.filter(t => t.completed);
    } else if (status === 'pending') {
        tasks = tasks.filter(t => !t.completed);
    }
    res.json(tasks);
}

// this controller adds a new task
function addTask(req, res) {
    const { title, description, dueDate, priority } = req.body;
    if (!title || typeof title !== 'string' || !title.trim()) {
        return res.status(400).json({ error: 'Title is required and must not be empty.' });
    }
    if (!description || typeof description !== 'string' || !description.trim()) {
        return res.status(400).json({ error: 'Description is required and must not be empty.' });
    }
 
    const tasks = readTasks();
    const newTask = {
        id: Date.now().toString(),
        title: title.trim(),
        description: description.trim(),
        dueDate: dueDate ? dueDate : null,
        priority: priority ? priority : 'normal',
        completed: false,
        createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
}

// this controller marks a task as completed
function markCompleted(req, res) {
    const { id } = req.params;
    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    task.completed = true;
    writeTasks(tasks);
    res.json(task);
}

// this controller edits an existing task's fields
function editTask(req, res) {
    const { id } = req.params;
    const { title, description, dueDate, priority } = req.body;
    const tasks = readTasks();
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    if (title !== undefined) {
        if (!title || typeof title !== 'string' || !title.trim()) {
            return res.status(400).json({ error: 'Title must not be empty.' });
        }
        task.title = title.trim();
    }
    if (description !== undefined) {
        if (!description || typeof description !== 'string' || !description.trim()) {
            return res.status(400).json({ error: 'Description must not be empty.' });
        }
        task.description = description.trim();
    }
    if (dueDate !== undefined) {
        task.dueDate = dueDate;
    }
    if (priority !== undefined) {
        task.priority = priority;
    }
    writeTasks(tasks);
    res.json(task);
}

// this controller deletes a task
function deleteTask(req, res) {
    const { id } = req.params;
    let tasks = readTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found.' });
    }
    const deleted = tasks.splice(index, 1)[0];
    writeTasks(tasks);
    res.json(deleted);
}

module.exports = { getTasks, addTask, markCompleted, editTask, deleteTask };