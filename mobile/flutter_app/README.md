# 📱 Flashcard Viewer - Flutter Mobile App

Native mobile implementation of the Flashcard Viewer for iOS and Android.

## 🚀 Features

- ✅ **3D Flip Animation** - Smooth native flip animations at 60fps
- ✅ **Randomized Flashcards** - Fisher-Yates shuffle on every load
- ✅ **Navigation Controls** - Previous/Next with haptic feedback
- ✅ **Progress Tracking** - Visual progress bar with numeric indicator
- ✅ **Refresh Functionality** - Reshuffle and restart
- ✅ **Media Support** - Images and videos on answer side
- ✅ **Haptic Feedback** - Native platform haptics on interactions
- ✅ **Platform Adaptive** - Follows Material Design guidelines

## 📦 Setup

### Prerequisites

- Flutter SDK 3.0.0 or higher
- Dart SDK 3.0.0 or higher
- Android Studio / Xcode (for mobile development)

### Installation

```bash
cd mobile/flutter_app
flutter pub get
```

### Run

```bash
# iOS
flutter run -d ios

# Android
flutter run -d android
```

## 📁 Project Structure

```
lib/
├── main.dart                 # App entry point
├── models/
│   └── flashcard.dart       # Data models
├── services/
│   └── flashcard_service.dart # Business logic
├── screens/
│   └── flashcard_screen.dart  # Main screen
└── widgets/
    ├── flashcard_widget.dart  # Flashcard component
    └── progress_bar.dart      # Progress indicator
```

## 🔗 Shared Data

The app uses the shared flashcards data from:
```
../../shared/data/flashcards.json
```

This ensures consistency between web and mobile versions.

## 🎨 Design

- **Front**: Black background with white text (matches web spec)
- **Back**: White background with black text
- **Animations**: Smooth 3D flip using `AnimationController`
- **Haptics**: Native feedback on interactions

## 🛠️ Tech Stack

- **Flutter** - UI framework
- **Dart** - Programming language
- **Material Design** - UI components
- **AnimationController** - Flip animations
- **shared_preferences** - Local storage (future)

