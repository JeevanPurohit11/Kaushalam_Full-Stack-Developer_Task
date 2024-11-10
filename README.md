# Kaushalam_Full-Stack-Developer_Task - To-Do List App

## Overview

This full-stack to-do list application demonstrates both **front-end** and **back-end** development skills using **React**, **Node.js**, and **MongoDB**. The app provides a user-friendly interface where users can add, view, edit, delete, and prioritize tasks, with authentication for managing personal to-do lists.

## Features

### Front-End
- **Add Tasks**: Users can add new tasks with optional priority levels.
- **View Tasks**: Display all tasks in a list, with an option to filter by completion status or priority.
- **Edit Tasks**: Update task details and priority level.
- **Delete Tasks**: Remove tasks from the list.
- **Mark Tasks as Completed**: Toggle task completion status.

### Back-End
- **API Endpoints**: Handles CRUD operations for tasks.
- **Database Integration**: MongoDB for data persistence.
- **Authentication**: JWT-based authentication for user sessions.
- **Validation and Security**: Input validation, error handling, and secure token-based access.

### User Interface (UI)
- **Responsive Design**: Optimized for both desktop and mobile.
- **Consistent Styling**: Styled with CSS for a clean, intuitive user experience.

## Deployment

The application is deployed on Vercel and accessible at: **[https://kaushalam-full-stack-developer-task.vercel.app](https://kaushalam-full-stack-developer-task.vercel.app)**

## Tech Stack

- **Front-End**: React
- **Back-End**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Vercel (for both front-end and back-end)

## Project Structure


## Installation

### Prerequisites
- **Node.js** and **npm**
- **MongoDB** instance (local or cloud)

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Kaushalam_Full-Stack-Developer_Task.git
   cd Kaushalam_Full-Stack-Developer_Task
Set up Backend (server)

Go to the server directory:
bash
Copy code
cd server
Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file in the server directory with the following:
makefile
Copy code
PORT=8000
DB_CONNECTION_STRING=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
Start the server:
bash
Copy code
npm start
Set up Frontend (client)

Go to the client directory:
bash
Copy code
cd ../client
Install dependencies:
bash
Copy code
npm install
Start the front-end development server:
bash
Copy code
npm start
Run the App

Open http://localhost:3000 in your browser.
Challenges and Decisions
State Management: Used React hooks for efficient state handling.
Authentication: JWT was chosen for secure, stateless session management.
Routing: Utilized React Router for task management navigation.
Error Handling: Implemented error handling in API requests to handle potential failures.
License
This project is open-source and available under the MIT License.
