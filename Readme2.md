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
