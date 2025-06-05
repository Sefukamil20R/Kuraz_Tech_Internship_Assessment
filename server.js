const express = require('express');
const path = require('path');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Simple HTML+CSS status page
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>API Status</title>
            <style>
                body { font-family: Arial; background: #f4f4f4; text-align: center; margin-top: 100px; }
                .status { display: inline-block; padding: 30px 60px; background: #fff; border-radius: 10px; box-shadow: 0 2px 8px #ccc; }
                h1 { color: #27ae60; }
            </style>
        </head>
        <body>
            <div class="status">
                <h1>API is running 🚀</h1>
                <p>Welcome to the Task Manager API</p>
            </div>
        </body>
        </html>
    `);
});

// API routes
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Task API running at http://localhost:${PORT}`);
});