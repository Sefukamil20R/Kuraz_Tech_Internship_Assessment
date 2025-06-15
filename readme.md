# Task Manager REST API

A simple, well-structured backend API for managing tasks, built with **Node.js** and **Express**.  
Tasks are stored in a local JSON file for persistence.

---

## 🚀 Features

- **CRUD Endpoints** for tasks
- **Filtering** by completion status (`completed` or `pending`)
- **Validation** for required fields (`title`, `description`)
- **Supports**: `title`, `description`, `dueDate`, `priority`, `completed`, `createdAt`
- **Simple HTML+CSS "API is running" page** at `/`
- **Modular structure**: controllers, routes, models

---

## 📁 Project Structure

```
backend/
│
├── models/
│   └── taskModel.js
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── tasks.json
└── server.js
```

---

## 🛠️ Endpoints

### Get all tasks (with optional filtering)
`GET /api/tasks`  
Returns all tasks. Use `?status=completed` or `?status=pending` to filter.

### Add a new task
`POST /api/tasks`  
Creates a new task. Requires `title` and `description`.

### Mark a task as completed
`PUT /api/tasks/:id`  
Marks the specified task as completed.

### Edit a task (title, description, dueDate, priority)
`PUT /api/tasks/:id/edit`  
Updates any of the task fields.

### Delete a task
`DELETE /api/tasks/:id`  
Deletes the specified task.

### Add a new task
```
POST /api/tasks
Body (JSON):
{
  "title": "Task title",
  "description": "Task description",
  "dueDate": "2024-06-10",      // optional
  "priority": "high"            // optional, default: "normal"
}
```

### Mark a task as completed
```
PUT /api/tasks/:id
```

### Edit a task (title, description, dueDate, priority)
```
PUT /api/tasks/:id/edit
Body (JSON): (any fields to update)
{
  "title": "New title",
  "description": "New description",
  "dueDate": "2024-06-12",
  "priority": "medium"
}
```

### Delete a task
```
DELETE /api/tasks/:id
```

---

## 🧑‍💻 How to Run

1. Install dependencies:
    ```
    npm install
    ```
2. Start the server:
    ```
    node server.js
    ```
3. Visit [http://localhost:3000/](http://localhost:3000/) to see the status page.

---


## 👤 Author

Built by Sefina 

---
