# 📝 React Notes App

A simple Notes Application built with **React.js, Vite, Tailwind CSS, and Lucide React**.

This project was created to practice core React concepts such as state management with `useState`, form handling, dynamic rendering, array manipulation, and interactive UI design.

## Live Demo
https://jkumar-j.github.io/notes-app/

## 🚀 Features

- Create and display notes
- Delete notes
- Dynamic rendering of notes
- Controlled inputs using React state
- Notepad-style UI
- Responsive layout using Tailwind CSS
- Scrollable notes area
- Text wrapping for long titles and content
- Delete button with Lucide React icon

## 🛠️ Technologies Used

- **React.js**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **JavaScript (ES6+)**

## 📚 React Concepts Practiced

### Functional Components

The application is built using React functional components.

```jsx
const App = () => {
  // component logic
};
```

### useState

`useState` is used to manage the title, content, and notes list.

```jsx
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [notes, setNotes] = useState([]);
```

### Controlled Components

The input and textarea values are controlled by React state.

```jsx
<input value={title} onChange={(e) => setTitle(e.target.value)} />
```

### Event Handling

The application handles form submission and delete button clicks using React event handlers.

### Dynamic Rendering

Notes are rendered dynamically using JavaScript's `map()` method.

```jsx
{
  notes.map((note, index) => <div key={index}>...</div>);
}
```

### Adding Notes

A new note is added to the notes state.

```jsx
const copyNotes = [...notes];
copyNotes.push({ title, content });
setNotes(copyNotes);
```

### Deleting Notes

A selected note is removed from the notes array.

```jsx
const copyNotes = [...notes];
copyNotes.splice(index, 1);
setNotes(copyNotes);
```

## 📁 Project Structure

```text
notes-app/
├── public/
├── src/
│   ├── assets/
│   │   └── garaz-notepad-2154581_1920.png
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/JKumar-J/notes-app.git
```

### 2. Navigate to the project

```bash
cd react-notes-app
```

### 3. Install dependencies

```bash
npm install
npm install tailwindcss @tailwindcss/vite
```

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 📦 Production Build

Create a production build with:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔮 Future Improvements

- [ ] Save notes using `localStorage`
- [ ] Edit existing notes
- [ ] Search notes
- [ ] Add note categories
- [ ] Add timestamps
- [ ] Add dark/light theme
- [ ] Add delete confirmation
- [ ] Add backend/database integration
- [ ] Add authentication

## 💡 What I Learned

While building this project, I practiced:

- React functional components
- `useState`
- Controlled components
- Event handling
- Array spread operator
- `map()` and `splice()`
- Conditional/dynamic UI rendering
- Tailwind CSS
- CSS positioning
- Handling overflowing content
- Using Lucide React icons
- Vite project structure

## 👨‍💻 Author

**Kumar Jawale**

GitHub: `https://github.com/YOUR_USERNAME`

---

⭐ Feel free to explore the project and check out the source code.
