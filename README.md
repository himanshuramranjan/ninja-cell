# Ninja Cell Application

Ninja Cell Application is a Node.js application built using Express.js framework. It manages students, interviews, and user authentication for a placement cell. The application provides features such as adding students, conducting interviews, enrolling students in interviews, and generating reports.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version >= 10.0.0)
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd placement-cell-application
```

3. Install the dependencies:

```bash
npm install
```

4. Set up environment variables:
   
   - Create a `.env` file in the root directory of the project.
   - Define the following environment variables in the `.env` file:
   
     ```bash
     DATABASE_URI=<your_mongodb_connection_string>
     ```
   
   - Replace `<your_mongodb_connection_string>` with your actual MongoDB connection string.

```bash
     PORT=<your_port_number>
     ```
   
   - Replace `<port>` with your actual PORT.
   
5. Start the application:

```bash
npm start
```

## Usage

The application provides various routes to perform different actions. Here are some of the main routes:

- `/` - Renders the sign-in page.
- `/sign-up` - Renders the sign-up page.
- `/create` (POST) - Creates a new user.
- `/create-session` (POST) - Authenticates the user and creates a session.
- `/sign-out` - Destroys the user session and logs out.
- `/profile` - Renders the user profile page.
- `/update` (POST) - Updates the user profile.
- `/dashboard` - Renders the student dashboard.
- `/dashboard/interview` - Renders the interview dashboard.
- `/student/add-student` - Renders the add student page.
- `/student/update/:id` (POST) - Updates a student record.
- `/student/edit-student/:id` - Renders the edit student page.
- `/student/create` (POST) - Creates a new student record.
- `/student/destroy/:studentId` - Deletes a particular student record.
- `/interview/add-interview` - Renders the add interview page.
- `/interview/create` (POST) - Creates a new interview.
- `/interview/enroll-in-interview/:id` (POST) - Enrolls a student in an interview.
- `/interview/deallocate/:studentId/:interviewId` - Deallocates a student from an interview.
- `/download` - Downloads CSV reports.

## Project Structure

The project follows a specific file structure:

- `server.js` - The main entry point of the application and connection with database.
- `app.js` - The all configuration for routes and libraries of the app are done here.
- `config/` - passport authentication setup.
- `controllers/` - Contains the controllers for different routes and actions.
- `routes/` - Defines the routes for different features and API endpoints.
- `views/` - Contains the EJS templates for rendering the views.
- `models/` - Database models for MongoDB collections.
- `public/` - Static files (CSS, images, etc.).
- `utils/` - Utility functions used throughout the application.

## Contributing

Contributions are welcome! Here's how you can contribute to the project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: