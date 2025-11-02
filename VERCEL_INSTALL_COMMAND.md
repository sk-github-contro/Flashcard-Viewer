# 🔧 Vercel Install Command for Flutter

## Install Command Value

```
flutter pub get
```

---

## 📝 Where to Add It

In Vercel Dashboard → Project Settings → Build & Development Settings:

**Install Command**: `flutter pub get`

---

## ✅ What It Does

- Reads `pubspec.yaml`
- Downloads all Flutter dependencies
- Sets up the Flutter environment
- Required before building the app

---

## ⚠️ Important Notes

1. **Vercel Auto-Detection**: 
   - Vercel might auto-detect and run `flutter pub get`
   - But **explicitly setting it is recommended** to ensure it runs

2. **Order of Execution**:
   - Install Command runs FIRST (`flutter pub get`)
   - Then Build Command runs (`flutter build web --release`)

3. **If Install Command is Empty/Blank**:
   - You can leave it empty and Vercel might auto-detect
   - But setting `flutter pub get` explicitly is safer

---

## 🎯 Complete Settings Recap

| Setting | Value |
|---------|-------|
| **Root Directory** | `mobile/flutter_app` |
| **Install Command** | `flutter pub get` |
| **Build Command** | `flutter build web --release` |
| **Output Directory** | `build/web` |

---

## 🐛 Troubleshooting

### If build fails with "package not found":
- ✅ Make sure Install Command is set to `flutter pub get`
- ✅ Check that `pubspec.yaml` is in `mobile/flutter_app/`

### If Install Command field is missing:
- Vercel might auto-detect - try deploying without it first
- If build fails, check Project Settings → Build & Development Settings

---

## 💡 Recommendation

**Set it explicitly**: `flutter pub get`

This ensures dependencies are always installed before building.

