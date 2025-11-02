# 🚀 Deploy Flutter Web App (Option A - Separate Project)

## ✅ Method 1: Vercel Dashboard (NO Flutter Installation Needed!)

**This is the EASIEST way** - Vercel will build Flutter for you automatically.

### Steps:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Log in with your GitHub account

2. **Create New Project**
   - Click **"Add New..."** → **"Project"**
   - Import from GitHub: Select `sk-github-contro/Flashcard-Viewer`

3. **Configure Flutter Project**
   - **Root Directory**: Click **"Edit"** → Enter: `mobile/flutter_app`
   - **Framework Preset**: Leave as **"Other"** (or select "Vite" and change)
   - **Build Command**: `flutter build web --release`
   - **Output Directory**: `build/web`
   - **Install Command**: `flutter pub get` (optional, Vercel may auto-detect)

4. **Environment Variables** (None needed!)

5. **Deploy!**
   - Click **"Deploy"**
   - Vercel will:
     - Install Flutter SDK automatically
     - Run `flutter pub get`
     - Run `flutter build web --release`
     - Deploy to a new URL

6. **Result:**
   - You'll get a URL like: `https://flashcard-viewer-flutter-abc123.vercel.app`
   - Your React app stays at: `https://flashcard-viewer.vercel.app` (or your existing URL)

---

## ✅ Method 2: Install Flutter Locally (If you want local builds)

### Install Flutter:

**macOS:**
```bash
# Download Flutter SDK
cd ~
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:`pwd`/flutter/bin"

# Verify installation
flutter doctor
```

**Or use Homebrew:**
```bash
brew install --cask flutter
flutter doctor
```

### Then Build & Deploy:

```bash
cd /Users/sohamkandalgaonkar/Documents/Coding\ Projects/DigitalLearningApp/mobile/flutter_app

# Install dependencies
flutter pub get

# Build web
flutter build web --release

# Deploy to Vercel
cd build/web
vercel --prod
```

---

## 🔗 Linking Both Apps

After deployment, users can switch between apps:

- **React App**: Has link "Try Flutter Version →" (top left)
- **Flutter App**: Has link "← React Version" (top left)

Both apps are **FREE** to deploy on Vercel! 🎉

---

## 💡 Recommendation

**Use Method 1 (Vercel Dashboard)** - It's faster and you don't need to install Flutter locally!

---

## 🐛 Troubleshooting

If Vercel build fails:

1. **Check Build Logs** in Vercel dashboard
2. **Verify Flutter version** - Vercel uses stable Flutter
3. **Check `pubspec.yaml`** - Ensure all dependencies are valid
4. **Try manual build command**:
   ```
   cd mobile/flutter_app && flutter pub get && flutter build web --release
   ```

