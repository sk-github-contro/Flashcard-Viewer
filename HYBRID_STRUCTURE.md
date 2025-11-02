# 🏗️ Hybrid Structure Documentation

This project uses a **hybrid monorepo structure** that supports both web (React) and mobile (Flutter) implementations without breaking existing code.

## 📁 Project Structure

```
DigitalLearningApp/
├── src/                          # Web App (React + TypeScript)
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   ├── data/                     # Web-specific data (symlink to shared)
│   └── ...
├── mobile/
│   └── flutter_app/             # Mobile App (Flutter)
│       ├── lib/
│       │   ├── models/
│       │   ├── services/
│       │   ├── screens/
│       │   └── widgets/
│       └── pubspec.yaml
├── shared/
│   └── data/
│       └── flashcards.json       # Shared flashcard data
├── index.html                    # Web entry point
├── package.json                  # Web dependencies
└── README.md                     # Main documentation
```

## 🔄 Shared Resources

### Data Layer
- **Location**: `shared/data/flashcards.json`
- **Usage**: 
  - Web: Imported via `src/data/flashcards.json` (can be symlinked)
  - Mobile: Bundled as asset in Flutter app

### Business Logic
- **Shuffle Algorithm**: Fisher-Yates (implemented in both)
- **Data Models**: Similar structure, language-specific implementations

## 🌐 Web Implementation

### Technology Stack
- React 18.2
- TypeScript 5.0
- Tailwind CSS 3.3
- Vite 4.3

### Running
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

## 📱 Mobile Implementation

### Technology Stack
- Flutter 3.0+
- Dart 3.0+
- Material Design

### Running
```bash
cd mobile/flutter_app
flutter pub get
flutter run
```

### Build
```bash
# Android
flutter build apk

# iOS
flutter build ios
```

## ✨ Feature Parity

Both implementations support:
- ✅ Randomized flashcards on load
- ✅ 3D flip animation
- ✅ Previous/Next navigation
- ✅ Progress bar
- ✅ Refresh/shuffle functionality
- ✅ Media support (images/videos)
- ✅ Same visual design (black front, white back)

## 🔧 Development Workflow

### Web Development
```bash
# Terminal 1: Web dev server
npm run dev

# Terminal 2: Any other web tasks
```

### Mobile Development
```bash
# Terminal 1: Mobile app
cd mobile/flutter_app
flutter run

# Terminal 2: Hot reload enabled automatically
```

### Shared Data Updates
1. Edit `shared/data/flashcards.json`
2. Run sync script:
   ```bash
   ./scripts/sync-data.sh
   ```
   Or manually:
   - Web: Already in `src/data/` (auto-synced or copy from shared)
   - Mobile: Copy to `mobile/flutter_app/assets/flashcards.json`
3. Rebuild apps if needed

## 📦 Deployment

### Web (React)
- **Platform**: Vercel (already configured)
- **Build Command**: `npm run build`
- **Output**: `dist/`
- **Cost**: **FREE** ✅

### Web (Flutter)
- **Platform**: Vercel (free to deploy)
- **Build Command**: `flutter build web --release`
- **Output**: `mobile/flutter_app/build/web`
- **Cost**: **FREE** ✅

### Mobile Apps (Optional)
- **Platform**: Google Play Store ($25 one-time) / Apple App Store ($99/year)
- **Build Commands**:
  - Android: `flutter build apk` or `flutter build appbundle`
  - iOS: `flutter build ios`
- **Note**: Use Flutter Web for free deployment instead!

## 🔗 Cross-Platform Sync (Future)

Potential enhancements:
- Shared API backend
- Cloud sync for progress
- Cross-platform authentication
- Real-time collaboration

## 📝 Notes

- Both apps are **independent** - changes to one don't affect the other
- Shared data can be synced manually or via CI/CD
- Each platform can have platform-specific features
- No code duplication except necessary business logic

## 🎯 Benefits of This Structure

1. **No Breaking Changes** - Web app continues to work as-is
2. **Shared Data** - Single source of truth for flashcards
3. **Platform Optimization** - Each platform uses native capabilities
4. **Independent Development** - Teams can work on each platform separately
5. **Easy Maintenance** - Clear separation of concerns

