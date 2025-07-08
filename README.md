# 🧘 Zen Timer

**Zen Timer** is a minimalist Pomodoro-style desktop timer built with Electron.  
It helps you stay focused, work in cycles, and take mindful breaks — all with a calm, distraction-free interface.

---

## 🕰 Features

- ⏱ Pomodoro timer with configurable work and break sessions  
- 🔔 Sound notification at the end of each cycle  
- 🌑 Simple, dark-themed interface for focused work  
- 🪷 Inspired by Zen philosophy and minimalism  
- 🖥 Works as a standalone desktop application (Windows)

---

## 🚀 Getting Started

### 1. Download

👉 Go to the [Releases page](https://github.com/pablodorin/PersonalTimer/releases) and download the latest `.exe` installer.

Or clone the project and build it manually:

```bash
git clone https://github.com/pablodorin/PersonalTimer.git
cd PersonalTimer
npm install
npm run start
```

### 2. Build the Installer (Windows)

To generate a standalone `.exe` and `.msi` installer:

```bash
npm run build
```

This uses `electron-builder` to package the app. Files will be in the `dist/` folder.

---

## 📁 Folder Structure

```
PersonalTimer/
├── main.js           # Electron main process
├── index.html        # UI layout
├── style.css         # Styles
├── script.js         # Timer logic
├── img/              # Icons (incl. enso5.ico)
└── package.json      # Project metadata and scripts
```

---

## 💡 Philosophy

This app was built to encourage deep work and peaceful breaks.  
Its clean design and gentle flow are intended to keep your attention where it matters — not on the clock, but on your presence.

---

## ✨ Author

Developed with care by **[Z3N1T](https://github.com/pablodorin)**

> “Discipline is freedom.”

---

## 🧩 License

This project is licensed under the **ISC License**.  
Feel free to fork, remix, and improve.
