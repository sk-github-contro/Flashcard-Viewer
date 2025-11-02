# 🚀 Deploying Both Apps Side by Side

This guide shows how to run **React Web** and **Flutter Web** apps simultaneously on Vercel.

## 📍 URL Structure

- **React App**: `https://your-domain.vercel.app/` (root)
- **Flutter App**: `https://your-domain.vercel.app/flutter/` (subpath)

## 🎯 Option 1: Separate Vercel Projects (Recommended - Easiest)

This is the simplest approach - deploy each app as its own Vercel project.

### React App (Already Deployed)
- **Project**: `flashcard-viewer`
- **URL**: `https://flashcard-viewer.vercel.app`
- **Status**: ✅ Already working

### Flutter App (New Deployment)

1. **Build Flutter Web:**
   ```bash
   cd mobile/flutter_app
   flutter pub get
   flutter build web --release
   ```

2. **Deploy to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click **"New Project"**
   - Import from GitHub: `sk-github-contro/Flashcard-Viewer`
   - **Root Directory**: `mobile/flutter_app`
   - **Framework Preset**: Other
   - **Build Command**: `flutter build web --release`
   - **Output Directory**: `build/web`
   - **Install Command**: `flutter pub get` (if available)

3. **Access:**
   - Will get URL like: `https://flashcard-viewer-flutter.vercel.app`

### Custom Domain (Optional)
- Point both projects to same domain:
  - React: `yourdomain.com` (root)
  - Flutter: `flutter.yourdomain.com` (subdomain)

---

## 🎯 Option 2: Single Project with Monorepo

Deploy both from one Vercel project using rewrites.

### Setup

1. **Update vercel.json** (already done)
   - Configured to build both apps
   - Routes `/flutter/*` to Flutter app

2. **Build Process:**
   ```bash
   # Build React
   npm run build
   
   # Build Flutter
   cd mobile/flutter_app
   flutter build web --release
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Access:
- React: `https://your-domain.vercel.app/`
- Flutter: `https://your-domain.vercel.app/flutter/`

---

## 🎯 Option 3: GitHub Actions Auto-Deploy (Best for CI/CD)

Automatically deploy both apps on every push.

### React Deployment
Already configured - auto-deploys on push to main.

### Flutter Deployment

Add to `.github/workflows/deploy-flutter-web.yml`:

```yaml
name: Deploy Flutter Web

on:
  push:
    branches: [ main ]
    paths:
      - 'mobile/flutter_app/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      - run: |
          cd mobile/flutter_app
          flutter pub get
          flutter build web --release
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_FLUTTER_PROJECT_ID }}
          working-directory: mobile/flutter_app/build/web
```

---

## ✅ Quick Start (Option 1 - Recommended)

**Step 1: Build Flutter**
```bash
cd mobile/flutter_app
flutter pub get
flutter build web --release
```

**Step 2: Deploy to Vercel**
```bash
cd build/web
vercel --prod
```

**Step 3: Access Both**
- React: Check your existing Vercel deployment
- Flutter: Use the new deployment URL from step 2

---

## 🔗 Linking Both Apps

Add navigation links in both apps to switch between them:

### In React App:
```tsx
<a href="/flutter/">Try Flutter Version</a>
```

### In Flutter App:
```dart
TextButton(
  onPressed: () => html.window.location.href = '/',
  child: Text('Try React Version'),
)
```

---

## 💡 Recommendation

**Use Option 1** (Separate Projects):
- ✅ Simplest setup
- ✅ Independent deployments
- ✅ Easy to manage
- ✅ Both apps can have their own custom domains
- ✅ No complex routing needed

Both apps will be **FREE** to deploy on Vercel! 🎉

