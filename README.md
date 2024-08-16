# Task Manager Backend

This is the backend for the Task Manager application, built with Node.js, Express.js, and MongoDB. The backend provides a RESTful API for managing tasks, including creating, reading, updating, and deleting tasks. The frontend of this application uses React, Redux, and Tailwind CSS to manage state and design the user interface.

## Features

- **Create Tasks**: Add a new task with a title and description.
- **Read Tasks**: Retrieve the list of tasks.
- **Update Tasks**: Mark tasks as done/undo them or update task details.
- **Delete Tasks**: Remove tasks from the list.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)

## Getting Started

Follow these instructions to set up and run the backend locally.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/earth9890/task-manager-backend.git

cd task-manager-backend

npm install

```

Create .env file in root folder and paste the below environment variables.

```bash
MONGO_URI=mongodb+srv://archiveadmin:archive@archives.no5a8kl.mongodb.net/Task
PORT=5000
```

### Run Project 

```bash
npm start

```

Output : Server running on http://localhost:5000
MongoDB connected

Add the correct http://localhost:5000 backend host in frontend. 
