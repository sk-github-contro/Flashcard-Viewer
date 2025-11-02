# 🔍 Debugging Vercel Build Failure

## ❌ Build Error

```
Command "if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable --depth 1 $HOME/flutter; fi && export PATH="$PATH:$HOME/flutter/bin" && flutter --version && flutter pub get && flutter build web --release" exited with 1
```

## 🔍 Check Build Logs

The error code `1` means something failed. Check Vercel build logs for specific error:

1. Go to **Vercel Dashboard** → Your Flutter Project
2. Click on **latest deployment**
3. Check **Build Logs** tab
4. Look for the actual error message

---

## ✅ Common Issues & Fixes

### Issue 1: Flutter Clone Fails

**Error**: `git clone failed` or `network error`

**Fix**: The git clone might be timing out. Try building without depth limit:

**Updated Build Command**:
```bash
if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable $HOME/flutter; fi && export PATH="$PATH:$HOME/flutter/bin" && flutter --version && flutter pub get && flutter build web --release
```

(Removed `--depth 1` to avoid clone issues)

---

### Issue 2: Flutter Command Not Found After Clone

**Error**: `flutter: command not found` after clone

**Fix**: Make sure PATH is set correctly:

**Updated Build Command**:
```bash
if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable $HOME/flutter; fi && export PATH="$PATH:$HOME/flutter/bin:$HOME/.pub-cache/bin" && flutter doctor && flutter --version && cd mobile/flutter_app && flutter pub get && flutter build web --release
```

---

### Issue 3: pubspec.yaml Errors

**Error**: `Error on line X of pubspec.yaml`

**Fix**: Check `pubspec.yaml` syntax, dependencies are valid

---

### Issue 4: Build Timeout

**Error**: `Build timed out`

**Fix**: First build takes 5-10 minutes (Flutter download). This is normal.

---

## 🎯 Recommended: Simplified Build Command

Try this simpler version that's more reliable:

**Build Command**:
```bash
if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable $HOME/flutter; fi && export PATH="$PATH:$HOME/flutter/bin" && flutter --version && cd mobile/flutter_app && flutter pub get && flutter build web --release
```

**Key changes:**
- ✅ Removed `--depth 1` (more reliable)
- ✅ Added `cd mobile/flutter_app` to ensure we're in the right directory
- ✅ Simplified PATH export

---

## 📝 Check These in Vercel Logs

1. **Does Flutter clone successfully?**
   - Look for: `Cloning into '$HOME/flutter'...`

2. **Does PATH get set?**
   - Look for: `Flutter X.X.X` (version output)

3. **Does pub get work?**
   - Look for: `Running "flutter pub get"...`

4. **Does build start?**
   - Look for: `Compiling lib/main.dart for the Web...`

5. **Where does it fail?**
   - Check the last successful step before error

---

## 🚀 Quick Fix: Try This Build Command

Update in Vercel Dashboard:

**Build Command**:
```bash
if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable $HOME/flutter 2>&1; fi && export PATH="$PATH:$HOME/flutter/bin" && which flutter && flutter --version 2>&1 && cd mobile/flutter_app && flutter pub get 2>&1 && flutter build web --release 2>&1
```

**This adds `2>&1` to show all output, helping debug where it fails.**

---

## 💡 Alternative: Use Pre-installed Flutter (If Available)

Some Vercel build environments might have Flutter pre-installed. Try:

**Build Command** (simpler, if Flutter exists):
```bash
cd mobile/flutter_app && flutter pub get && flutter build web --release
```

If this works, Flutter is already available and we don't need to install it.

---

## ✅ Next Steps

1. **Check Vercel build logs** - see actual error message
2. **Try updated build command** above
3. **Share the specific error** from logs if still failing

The minimal `index.html` I just created should work - Flutter will enhance it during build.

