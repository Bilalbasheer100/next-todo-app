

# ToDo App

A simple, yet powerful ToDo application built using **Next.js**. This app allows users to create, manage, and organize tasks into different states. With drag-and-drop functionality and Zustand state management, it offers an intuitive experience for handling tasks.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Demo

[Live Demo](https://next-todo-app-swart.vercel.app/) - You can view a live version of the app here.

## Features

- **Add New Tasks**: Users can add tasks with custom titles.
- **Task Organization**: Tasks are divided into different states such as "To Do", "In Progress", and "Done".
- **Drag-and-Drop**: Easily move tasks between states using drag-and-drop functionality.
- **Persistent State**: The app keeps track of tasks across sessions.
- **Responsive Design**: Optimized for both desktop and mobile devices.
  
## Installation

### Prerequisites
- Node.js (>= v14)
- npm or yarn

### Steps to Set Up Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Add Tasks**: Click the "Add" button in any column to create a new task.
2. **Drag-and-Drop**: Once tasks are created, drag and drop them to different columns (states).
3. **Task States**: Tasks are divided into predefined categories such as `To Do`, `In Progress`, and `Done`.

## Technologies Used

- **Next.js**: For server-side rendering, routing, and building the app.
- **Zustand**: For lightweight state management, handling task states efficiently.
- **React**: For building the UI components.
- **CSS Modules**: For styling components.
- **Classnames**: To conditionally apply CSS classes.


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -m 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.

