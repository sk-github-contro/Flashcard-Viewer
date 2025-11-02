# 🔧 Correct Vercel Build Command for Flutter

## ❌ Problem

Flutter installs successfully, but `flutter` command not found in next step.

**Cause**: PATH export doesn't persist between separate commands in Vercel.

---

## ✅ Solution: Single Build Command

Everything must be in **ONE Build Command** so PATH persists.

---

## 📝 Copy This EXACT Command

**Build Command** (paste this entire thing):

```bash
if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable --depth 1 $HOME/flutter; fi && export PATH="$PATH:$HOME/flutter/bin" && flutter --version && flutter pub get && flutter build web --release
```

⚠️ **Must be ONE line!** Copy the entire command above.

---

## 🎯 Vercel Settings

### Install Command:
```
echo 'Preparing Flutter build...'
```
(Or leave empty - not critical)

### Build Command:
```bash
if [ ! -d "$HOME/flutter" ]; then git clone https://github.com/flutter/flutter.git -b stable --depth 1 $HOME/flutter; fi && export PATH="$PATH:$HOME/flutter/bin" && flutter --version && flutter pub get && flutter build web --release
```

### Output Directory:
```
build/web
```

---

## 📋 Step-by-Step in Vercel Dashboard

1. Go to: **Vercel Dashboard** → Your Flutter Project
2. Click: **Settings** → **Build & Development Settings**
3. Click: **Override** next to "Build and Output Settings"
4. Paste the Build Command above (all in one line)
5. Set Output Directory: `build/web`
6. Click **Save**
7. Go to **Deployments** tab
8. Click **⋯** (three dots) on latest deployment → **Redeploy**

---

## 🔍 What This Command Does

1. **Checks if Flutter exists**: `if [ ! -d "$HOME/flutter" ]`
2. **Downloads Flutter** (only if not exists): `git clone ...`
3. **Sets PATH**: `export PATH="$PATH:$HOME/flutter/bin"`
4. **Verifies Flutter**: `flutter --version`
5. **Installs dependencies**: `flutter pub get`
6. **Builds web**: `flutter build web --release`

All in **one command** = PATH persists! ✅

---

## ✅ Expected Build Output

You should see:
```
✓ Cloning Flutter (first time only)
✓ Setting PATH
✓ Flutter 3.x.x (version)
✓ Running "flutter pub get"...
✓ Building flutter build web --release...
✓ Build successful!
```

---

## 🐛 Troubleshooting

### Still getting "command not found"?

1. **Verify it's ONE line**: No line breaks in Build Command
2. **Check quotes**: Make sure `$HOME` and `$PATH` use double quotes
3. **Check logs**: Look at full Vercel build output

### Build fails with clone error?

- Try removing `--depth 1` from git clone command
- Or use: `git clone https://github.com/flutter/flutter.git -b stable $HOME/flutter`

### Takes too long?

- First build: 3-5 minutes (normal)
- Subsequent builds: 2-4 minutes (Flutter cached)

---

## 💡 Why This Works

- **Single command** = Same shell session = PATH persists
- **Conditional clone** = Only downloads once (cached by Vercel)
- **All steps chained** = Everything runs in order with same environment

---

## ✅ Ready to Deploy!

Copy the Build Command above and paste it into Vercel. Should work! 🚀

