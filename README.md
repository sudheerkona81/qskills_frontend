# 📝 QSkills Frontend Project  
**Text Translator & Random String Generator (React + Tailwind CSS)**

A modern and interactive React web application that includes:
1. A multilingual **Text Translator**  
2. A **Random String Generator**  

Built with **React**, **Vite**, **React Router**, and **Tailwind CSS**.

---
---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React | UI Framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Router | Client-side routing |
| MyMemory Translation API | Translation backend |
| TypeScript | Type safety |
| Git & GitHub | Version control |

---

## 📁 Project Structure

```
qskills_frontend/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── vite-env.d.ts
    ├── components/
    │   └── Header.tsx
    └── pages/
        ├── Home.tsx
        ├── Translator.tsx
        └── StringGenerator.tsx
```

---

## 📂 Folder & File Explanation

### 🔹 `src/`
Contains all application source code.

- **main.tsx** – Entry point of the React app.
- **App.tsx** – Handles routing using React Router.
- **index.css** – Global styles and Tailwind directives.

### 🔹 `components/`
Reusable UI components.
- **Header.tsx** – Navigation bar shown on all pages.

### 🔹 `pages/`
Page-level components.
- **Home.tsx** – Landing page.
- **Translator.tsx** – Text translation feature.
- **StringGenerator.tsx** – Random string generation feature.

### 🔹 Configuration Files
- **tailwind.config.js** – Tailwind CSS setup.
- **postcss.config.js** – PostCSS plugins.
- **vite.config.ts** – Vite configuration.
- **tsconfig*.json** – TypeScript configuration.
- **eslint.config.js** – Linting rules.

---

## 🚀 Features

### 🗣 Text Translator
- Translate English text into multiple languages.
- Uses **MyMemory Translation API**.
- Copy translated text with one click.
- Loading indicator during API call.

### 🔢 Random String Generator
- Generates random readable strings.
- Built using React hooks.
- Styled using Tailwind CSS.

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sudheerkona81/qskills_frontend.git
```

### 2️⃣ Install dependencies
```bash
cd qskills_frontend
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

### 4️⃣ Open in browser
```
http://localhost:5173/
```

---

## 🧠 Key Concepts Demonstrated

- React Hooks (`useState`, `useEffect`, `useCallback`)
- API integration using `fetch`
- Client-side routing
- Responsive UI with Tailwind CSS
- Git & GitHub workflow

---

## 📦 Dependencies Overview

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x"
}
```

---

## 🎓 Academic Use

This project is suitable for:
- Mini project
- College submission
- Portfolio showcase
- React learning reference

---

## 📬 Author

**Sudheer Kona**  
GitHub: https://github.com/sudheerkona81

---

## 📜 License

This project is open source and free to use for learning and educational purposes.
