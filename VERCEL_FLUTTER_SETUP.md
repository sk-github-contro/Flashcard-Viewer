# 🔧 Fixing Flutter "command not found" on Vercel

## ❌ Problem

```
sh: line 1: flutter: command not found
Error: Command "flutter pub get" exited with 127
```

**Cause**: Vercel doesn't have Flutter pre-installed.

---

## ✅ Solution: Install Flutter During Build

I've created a build script that installs Flutter automatically.

### Files Created:

1. **`mobile/flutter_app/install-flutter.sh`** - Installs Flutter SDK
2. **`mobile/flutter_app/vercel.json`** - Vercel configuration

---

## 📝 Updated Vercel Settings

### Install Command:
```bash
chmod +x install-flutter.sh
```

### Build Command:
```bash
./install-flutter.sh && flutter pub get && flutter build web --release
```

### Output Directory:
```
build/web
```

---

## 🚀 Quick Setup in Vercel Dashboard

1. Go to your Flutter project in Vercel
2. Settings → Build & Development Settings
3. Update:

   **Install Command**:
   ```
   chmod +x install-flutter.sh
   ```

   **Build Command**:
   ```
   ./install-flutter.sh && flutter pub get && flutter build web --release
   ```

   **Output Directory**:
   ```
   build/web
   ```

---

## ⚡ Alternative: Simpler Build Command (All-in-One)

You can also combine everything into the Build Command:

**Build Command**:
```bash
git clone https://github.com/flutter/flutter.git -b stable --depth 1 $HOME/flutter && export PATH="$PATH:$HOME/flutter/bin" && flutter pub get && flutter build web --release
```

**Install Command**: (leave empty or remove)

**Output Directory**:
```
build/web
```

---

## 🎯 Recommended: Use the Script (Better)

The script approach (`install-flutter.sh`) is cleaner and easier to maintain.

---

## ✅ Verification

After deploying, check build logs:
- ✅ Should see "📦 Installing Flutter..."
- ✅ Should see "✅ Flutter installed successfully"
- ✅ Should see Flutter version
- ✅ Should see successful build

---

## 🐛 Troubleshooting

### Still getting "command not found"?

1. **Check file permissions**: Make sure `install-flutter.sh` is executable
   ```bash
   chmod +x mobile/flutter_app/install-flutter.sh
   ```

2. **Verify PATH**: The script exports PATH, but if it fails, try the all-in-one command above

3. **Check Vercel logs**: Look at full build output in Vercel dashboard

### Build takes too long?

- First build: 3-5 minutes (downloads Flutter)
- Subsequent builds: 2-4 minutes (cached Flutter)

This is normal for Flutter on Vercel.

---

## 💡 Why This Works

1. **install-flutter.sh**: Downloads Flutter SDK to `$HOME/flutter`
2. **export PATH**: Makes `flutter` command available
3. **Build Command**: Runs script, then normal Flutter commands
4. **Vercel**: Caches `$HOME/flutter` between builds (faster after first)

---

## ✅ Next Steps

1. ✅ Scripts are created and pushed to Git
2. Update Vercel project settings with new Build Command
3. Redeploy
4. Should work! 🎉

