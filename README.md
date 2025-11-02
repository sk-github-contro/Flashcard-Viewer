# 🧠 Flashcard Viewer

A beautiful, interactive flashcard viewer built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Randomized Flashcards**: Cards are shuffled on every page load
- **Smooth Flip Animation**: Click any flashcard to reveal the answer
- **Navigation Controls**: Previous/Next buttons with smart disable logic
- **Progress Tracking**: Visual progress bar with numeric indicator
- **Refresh Functionality**: Reshuffle and restart anytime
- **Media Support**: Displays images and videos on the back of cards
- **Responsive Design**: Beautiful gradient background with modern UI

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Tech Stack

- **React 18.2** - UI library
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 3.3** - Utility-first styling
- **Vite 4.3** - Fast build tool

## 📦 Project Structure

This is a **hybrid monorepo** supporting both web and mobile:

```
DigitalLearningApp/
├── src/                             # Web App (React + TypeScript)
│   ├── components/
│   │   └── FlashcardComponent.tsx  # Flashcard with flip animation
│   ├── hooks/
│   │   └── useFlashcards.ts        # Custom React hook
│   ├── utils/
│   │   └── shuffleArray.ts         # Utility functions
│   ├── constants/
│   │   └── index.ts                # App constants
│   ├── data/
│   │   └── flashcards.json         # Flashcard data
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # App entry point
│   ├── types.ts                     # TypeScript interfaces
│   └── index.css                    # Global styles
├── mobile/
│   └── flutter_app/                 # Mobile App (Flutter)
│       ├── lib/
│       │   ├── models/              # Data models
│       │   ├── services/            # Business logic
│       │   ├── screens/             # App screens
│       │   └── widgets/             # UI components
│       └── pubspec.yaml             # Flutter dependencies
├── shared/
│   └── data/
│       └── flashcards.json          # Shared flashcard data
├── index.html                       # HTML entry point
└── package.json                     # Web dependencies
```

See [HYBRID_STRUCTURE.md](./HYBRID_STRUCTURE.md) for detailed structure documentation.

## 🎯 Features Implemented

### 1. Data Loading & Randomization
- Loads flashcards from `flashcards.json`
- Uses Fisher-Yates shuffle algorithm
- Re-randomizes on every refresh

### 2. Flashcard Display
- One card at a time
- Black background with white text (front)
- White background with black text (back)
- Smooth 3D flip animation on click

### 3. Navigation Controls
- Previous (←) and Next (→) buttons
- Disabled states for first/last cards
- Resets flip state on navigation

### 4. Progress Bar
- Visual progress indicator at bottom
- Shows current position (e.g., "3 / 10")
- Smooth animated transitions

### 5. Refresh Button
- Re-randomizes the deck
- Resets to first card
- Beautiful refresh icon with hover effects

## 🎨 Design Highlights

- Modern gradient background (blue to indigo)
- Smooth animations and transitions
- Shadow effects for depth
- Responsive layout
- Accessible button states
- Clean, minimal interface

## 📝 Data Format

Flashcards follow this structure:

```json
{
  "id": "unique-id",
  "front": {
    "title": "Question Title",
    "body": "Question details"
  },
  "back": {
    "answer": "Answer text",
    "media": {
      "url": "image or video URL",
      "type": "image" | "video"
    }
  }
}
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this project for learning and development.

