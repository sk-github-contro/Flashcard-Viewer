# 🧠 Flashcard Website Task Instructions

## 📝 Overview
You are building a **Flashcard Viewer** — a simple web interface that displays one flashcard at a time.

A **flashcard** is a small digital card used for learning or quick reference.  
Each flashcard has two sides:
- The **front side (question)** — black background with white text.
- The **back side (answer)** — white background with black text, and may optionally include images or videos.

When the user clicks on a flashcard, it should **flip** smoothly to reveal the other side.

---

## 📸 Screenshots

### Front of Flashcard (Question Side)
![Flashcard Front](./screenshots/flashcard-front.png)
*Black background with white text showing the question*

### Back of Flashcard (Answer Side)
![Flashcard Back](./screenshots/flashcard-back.png)
*White background with black text showing the answer and optional media*

---

## 🎯 Task Requirements

### 1. Load and Randomize Data
- Use the provided `@flashcards.json` file as your data source.
- Randomize the order of flashcards on every page refresh.
- Ensure users do not see the same flashcard sequence each time they reload the page.

### 2. Display Flashcards
- Display **only one flashcard at a time** on the screen.
- Implement a **flip animation** when the card is clicked:
  - Front side → shows the question.
  - Back side → shows the answer and optional media.

### 3. Navigation Controls
- Add **Previous (`←`)** and **Next (`→`)** buttons, similar to the screenshots provided.
- Users can move through the flashcards using these buttons.
- Disable the **Previous** button when on the first card and **Next** button when on the last card.

### 4. Progress Bar
- Add a **progress bar** at the bottom, showing the user’s progress through the deck.
- The bar should have:
  - A visual progress indicator.
  - A numeric progress label in the format:
    ```
    Example: 3 / 10
    ```
    where `3` is the current flashcard number and `10` is the total number of flashcards.

### 5. Refresh Button
- Add a **refresh icon/button** that resets the experience:
  - Re-randomizes the flashcards.
  - Starts over from the first flashcard.

---

## ⚙️ Expected Behavior Summary
- On page load → Flashcards appear in a random order.
- On click → Flashcard flips between question and answer.
- Navigation buttons → Move between cards and update progress bar.
- Progress bar → Updates dynamically with each card change.
- Refresh → Resets and reshuffles the deck.

---

## 💡 Notes
- Keep the UI clean, minimal, and visually similar to the provided screenshots.
- Ensure animations are **smooth and responsive**.
- You may use **React**, **Tailwind**, or **plain HTML/CSS/JS** — whichever you prefer.
- Focus on usability and overall user experience.

---
Flutter Mobile Extension (Future Enhancement)

Flutter Implementation Benefits:

```dart
// Enhanced mobile features with Flutter
- Native 60fps flip animations using AnimationController
- Platform-adaptive UI (Material/Cupertino)
- Haptic feedback on interactions
- Offline storage with shared_preferences
- Swipe gesture navigation
```

Project Structure for Hybrid Approach:

(without breaking existing structure) 

Flutter-Specific Features:

· Hot Reload for rapid development
· Single codebase for iOS & Android
· Native performance with compiled execution
· Rich widget ecosystem for consistent UI

---

🎯 Cross-Platform Strategy

Phase 1: Web Excellence

· ✅ Current React implementation
· ✅ Responsive design
· ✅ Progressive Web App (PWA) capabilities

Phase 2: Mobile Expansion

· 🚀 Flutter native apps for iOS/Android
· 🔄 Shared business logic
· 📱 Mobile-optimized gestures

Phase 3: Feature Parity

· ✨ Consistent user experience
· 🔗 Synchronized progress tracking
· 🌐 Multi-platform deployment


💡 Development Notes

Web Implementation:

· Keep the UI clean, minimal, and visually similar to the provided screenshots
· Ensure animations are smooth and responsive
· Focus on usability and overall user experience

Flutter Advantages:

· Performance: Native compilation for smooth animations
· Consistency: Same UI across iOS and Android
· Development Speed: Hot reload and rich widget library
· Maintenance: Single codebase for multiple platforms

---

🔮 Future Roadmap

Short-term (Web Focus):

· Enhance current React implementation
· Add PWA capabilities
· Improve accessibility

Medium-term (Mobile Expansion):

· Develop Flutter mobile apps
· Implement platform-specific features
· App store deployment

Long-term (Multi-Platform):

· Desktop applications (Flutter)
· Wearable device support
· Cross-platform sync

---

📚 Learning Outcomes

This project demonstrates:

· Modern web development with React, TypeScript, and Tailwind CSS
· TypeScript for type safety and better code maintainability
· JSON for structured data management
· CSS (with Tailwind) for styling and responsive design
· HTML as the foundation markup language
· Cross-platform planning and architecture
· Animation implementation in both web and native contexts
· Progressive enhancement strategies
· Technology evaluation and selection skills

## 🛠️ Tech Stack Used

### Web (React)
- **React 18.2** - UI library for building interactive components
- **TypeScript 5.0** - Type-safe JavaScript for better code quality
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Vite 4.3** - Fast build tool and dev server
- **JSON** - Data format for flashcards and configuration
- **HTML5** - Markup language
- **CSS3** - Styling with Tailwind utilities and custom styles

### Mobile (Flutter)
- **Flutter 3.0+** - Cross-platform UI framework
- **Dart 3.0+** - Programming language
- **Material Design** - UI component library
- **AnimationController** - Native 60fps animations
- **shared_preferences** - Local storage

### Shared
- **JSON** - Common data format (`shared/data/flashcards.json`)
- **Fisher-Yates Algorithm** - Shuffle implementation in both platforms

## 🏗️ Hybrid Structure

This project uses a **monorepo hybrid structure** that allows:
- ✅ **Web app** continues to work without changes
- ✅ **Mobile app** (Flutter) added alongside
- ✅ **Shared data** layer for flashcards
- ✅ **Independent development** for each platform
- ✅ **Feature parity** between web and mobile

See [HYBRID_STRUCTURE.md](./HYBRID_STRUCTURE.md) for detailed documentation.