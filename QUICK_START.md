# 🚀 Quick Start Guide

## Web App

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Mobile App (Flutter)

```bash
# Navigate to Flutter app
cd mobile/flutter_app

# Install dependencies
flutter pub get

# Run on device/emulator
flutter run

# Build APK (Android)
flutter build apk

# Build iOS
flutter build ios
```

## Sync Shared Data

```bash
# Run sync script
./scripts/sync-data.sh

# Or manually copy
cp shared/data/flashcards.json src/data/flashcards.json
cp shared/data/flashcards.json mobile/flutter_app/assets/flashcards.json
```

## Project Structure

- `src/` - Web app (React + TypeScript)
- `mobile/flutter_app/` - Mobile app (Flutter)
- `shared/data/` - Shared flashcard data

