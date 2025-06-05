const express = require('express');
const router = express.Router();
const {
    getTasks,
    addTask,
    markCompleted,
    editTask,
    deleteTask
} = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', markCompleted); 
router.put('/:id/edit', editTask); 
router.delete('/:id', deleteTask);

module.exports = router;