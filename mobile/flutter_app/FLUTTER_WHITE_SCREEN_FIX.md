# 🔧 Fixing White Screen on Flutter Web

## ❌ Problem

Deployed Flutter web app shows **white screen**.

**Common Causes:**
1. Missing `flutter.js` script tag
2. Incorrect base href
3. Assets not loading
4. Service worker issues
5. Build output not complete

---

## ✅ Solution 1: Fix index.html

The `web/index.html` needs the `flutter.js` script tag. I've updated it, but if white screen persists, check:

### Check Browser Console

1. Open deployed site
2. Press `F12` (Developer Tools)
3. Check **Console** tab for errors
4. Check **Network** tab for failed requests

Common errors:
- `flutter.js: Failed to load`
- `main.dart.js: 404 Not Found`
- `CORS error`
- `Asset not found`

---

## ✅ Solution 2: Rebuild with Base Href

If deploying to a subpath (like `/flutter/`), rebuild with base href:

```bash
cd mobile/flutter_app
flutter build web --release --base-href="/flutter/"
```

If deploying to root domain:
```bash
flutter build web --release --base-href="/"
```

---

## ✅ Solution 3: Check Vercel Output Directory

Make sure Vercel is serving from correct directory:

**Output Directory**: `build/web`

This should contain:
- ✅ `index.html`
- ✅ `flutter.js`
- ✅ `main.dart.js`
- ✅ `assets/` folder
- ✅ `manifest.json`

---

## ✅ Solution 4: Check Asset Loading

The app loads `assets/flashcards.json`. Verify:

1. **File exists**: `mobile/flutter_app/assets/flashcards.json`
2. **pubspec.yaml** lists it:
   ```yaml
   flutter:
     assets:
       - assets/flashcards.json
   ```
3. **Service loads correctly** (check browser console)

---

## 🔍 Debug Steps

### Step 1: Check Browser Console

Open browser DevTools (F12) → Console tab:

**If you see:**
- `flutter.js not found` → Build didn't complete properly
- `main.dart.js 404` → Wrong output directory
- `CORS error` → Vercel config issue
- `Cannot load asset` → Asset path issue

### Step 2: Check Network Tab

1. Open DevTools → **Network** tab
2. Refresh page
3. Look for **red failed requests**
4. Check if `flutter.js`, `main.dart.js` are loading

### Step 3: Check Vercel Build Logs

1. Go to Vercel Dashboard → Your Project
2. Click on latest deployment
3. Check **Build Logs**
4. Look for errors or warnings

---

## ✅ Quick Fix Commands

### Rebuild and Redeploy:

```bash
cd mobile/flutter_app

# Clean previous build
flutter clean

# Get dependencies
flutter pub get

# Build with explicit base href
flutter build web --release --base-href="/"

# Check build output
ls -la build/web/
```

### Verify build output contains:
- ✅ `index.html`
- ✅ `flutter.js`
- ✅ `main.dart.js`
- ✅ `assets/` directory
- ✅ `manifest.json`

---

## 🎯 Most Likely Issue

**White screen = JavaScript not loading**

1. Check `index.html` has `<script src="flutter.js"></script>`
2. Check Vercel Output Directory is `build/web`
3. Check browser console for errors
4. Verify `build/web/flutter.js` exists after build

---

## 💡 Alternative: Use Flutter's Auto-Generated index.html

If manual `index.html` doesn't work, let Flutter generate it:

1. **Delete** `web/index.html`
2. **Rebuild**: `flutter build web --release`
3. Flutter will generate a fresh `index.html`
4. **Deploy again**

---

## 🚀 After Fix

After deploying fix:

1. **Hard refresh** browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear cache** if needed
3. **Check console** for any remaining errors

---

## ✅ Summary

**Most common fix:**
1. Ensure `flutter.js` script tag in `index.html` ✅ (already fixed)
2. Verify Output Directory: `build/web` ✅
3. Rebuild with `--base-href="/"` if needed
4. Check browser console for specific errors

**The updated `index.html` should fix the white screen issue!**

