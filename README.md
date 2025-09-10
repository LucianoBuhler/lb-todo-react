# LB Todo React

A simple yet feature-rich Todo application built with modern React. This app allows users to manage tasks with a clean, Trello-inspired horizontal card layout.

## Features

- **Add Todos**: Create new todo items with a title and description using an expandable form with Material-UI components.
- **Toggle Completion**: Mark todos as completed or pending with a button; completed items are styled with strikethrough and green color.
- **Delete Todos**: Remove individual todo items using a delete icon.
- **Responsive Layout**: Todo cards are displayed side by side horizontally using flexbox, left-aligned with gaps between them, wrapping to new rows when the screen width is exceeded, similar to Trello's board layout.
- **State Management**: Uses React hooks (useState) for managing the todo list locally.

## Tech Stack

### Frontend
- **React**: Version 19.1.1 - For building the user interface with components.
- **Vite**: Version 7.1.2 - Fast build tool and development server with hot module replacement.
- **Material-UI (MUI)**: Version 7.3.2 - UI component library for buttons, icons, and FAB (Floating Action Button).
- **Emotion**: Versions 11.14.0/11.14.1 - Styling solution integrated with MUI for CSS-in-JS.

### Development Tools
- **ESLint**: Version 9.33.0 with React hooks and refresh plugins - For code linting and best practices.
- **TypeScript Types**: @types/react and @types/react-dom for type safety (though not fully utilized yet).

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd lb-todo-react
   ```

2. Install dependencies:
   ```
   npm install
   ```
   Or using Yarn:
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Usage

- Open the app in your browser.
- Use the textarea to add a todo description; it expands for title input.
- Click the + FAB to add the todo.
- Todo cards appear horizontally from the left with spacing.
- Click "Complete" to toggle status.
- Click the delete icon to remove a todo.
- Cards wrap to new rows if many items are added.

## Project Structure

```
lb-todo-react/
├── public/
│   └── index.html          # Entry HTML
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   └── Todo/       # Main Todo feature
│   │   │       ├── TodoApp.jsx     # Main container and logic
│   │   │       ├── TodoItem.jsx    # Individual todo card
│   │   │       ├── TodoForm.jsx    # Form for adding todos
│   │   │       └── TodoApp.css     # Styles for Todo app
│   │   └── layout/
│   │       ├── Header.jsx  # App header
│   │       └── Footer.jsx  # App footer
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│   ├── App.css             # Global styles
│   └── index.css           # Base styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint setup
└── README.md               # This file
```

## Building for Production

Run the build command:
```
npm run build
```
The output will be in the `dist/` directory. Preview it with:
```
npm run preview
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
