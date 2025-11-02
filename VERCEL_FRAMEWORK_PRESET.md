# 🎨 Vercel Framework Preset for Flutter

## Framework Preset Value

**Select**: **"Other"** (or "No Framework")

---

## 📝 Why "Other"?

Flutter is **not** a standard Vercel framework (like React, Next.js, Vue, etc.)

- ✅ **"Other"** tells Vercel: "Use my custom build commands"
- ✅ This allows you to set custom Install, Build, and Output settings
- ❌ **Don't select**: React, Next.js, Vue, Angular, etc. (these won't work for Flutter)

---

## 🎯 Where to Set It

In Vercel Dashboard → Project Configuration:

**Framework Preset**: Dropdown menu → Select **"Other"**

---

## ✅ Complete Settings

| Setting | Value |
|---------|-------|
| **Framework Preset** | `Other` |
| **Root Directory** | `mobile/flutter_app` |
| **Install Command** | `flutter pub get` |
| **Build Command** | `flutter build web --release` |
| **Output Directory** | `build/web` |

---

## 🔄 Alternative Names

Vercel might show different names:
- ✅ **"Other"** ← Most common
- ✅ **"No Framework"** ← Same thing
- ✅ **"Static Site"** ← Might work, but "Other" is safer

All of these tell Vercel: "I'll handle the build myself"

---

## 🐛 What Happens If You Choose Wrong Framework?

If you select React/Next.js/etc:
- ❌ Vercel will try to auto-detect React/Next.js config
- ❌ Won't find `package.json` in root (it's in `mobile/flutter_app`)
- ❌ Build will fail
- ❌ Flutter commands won't run

**Solution**: Always choose **"Other"** for Flutter projects

---

## 💡 Pro Tip

After selecting "Other", you'll see fields for:
- Install Command
- Build Command  
- Output Directory

These are exactly what you need! ✅

---

## ✅ Quick Checklist

Before deploying, verify:
- [ ] Framework Preset = **"Other"**
- [ ] Root Directory = `mobile/flutter_app`
- [ ] Install Command = `flutter pub get`
- [ ] Build Command = `flutter build web --release`
- [ ] Output Directory = `build/web`

---

## 🎉 Summary

**Framework Preset**: **"Other"**

That's it! Simple and straightforward. 🚀

