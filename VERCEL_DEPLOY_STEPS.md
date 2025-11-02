# 📋 Vercel Deployment Steps - Flutter Web App

## 🎯 Project Setup

**Project Name**: `flashcard-viewer-flutter` (or `flashcard-viewer-web-flutter`)

---

## 📝 Step-by-Step Instructions

### Step 1: Go to Vercel Dashboard
- Visit: **https://vercel.com/dashboard**
- Make sure you're logged in with your GitHub account

### Step 2: Create New Project
1. Click the **"Add New..."** button (top right)
2. Select **"Project"** from the dropdown

### Step 3: Import Repository
1. In the "Import Git Repository" section:
   - Find and select: **`sk-github-contro/Flashcard-Viewer`**
   - If not visible, click **"Adjust GitHub App Permissions"** and grant access
2. Click **"Import"**

### Step 4: Configure Project Settings

**⚠️ IMPORTANT: Change these settings before deploying!**

#### 4.1. Project Name
- **Project Name**: `flashcard-viewer-flutter`
- (You can change this later if needed)

#### 4.2. Root Directory ⚠️ CRITICAL
- Click the **"Edit"** link next to "Root Directory"
- Change from `./` to: **`mobile/flutter_app`**
- Click **"Continue"**

#### 4.3. Framework Preset ⚠️ IMPORTANT
- Select: **"Other"** (or "No Framework")
- **DO NOT** select: React, Next.js, Vue, etc.
- Flutter is not a standard Vercel framework, so "Other" is required
- This tells Vercel to use your custom build commands instead of auto-detecting

#### 4.4. Build and Output Settings
Click **"Override"** next to Build and Output Settings:

- **Build Command**: 
  ```
  flutter build web --release
  ```

- **Output Directory**: 
  ```
  build/web
  ```

- **Install Command**: 
  ```
  flutter pub get
  ```
  ⚠️ **IMPORTANT**: This installs Flutter dependencies. Vercel may auto-detect, but explicitly setting it ensures it runs.

### Step 5: Environment Variables
- **None needed** for this project
- Click **"Next"** or **"Deploy"**

### Step 6: Deploy!
1. Click **"Deploy"** button
2. Wait for build to complete (2-5 minutes)
   - Vercel will install Flutter SDK automatically
   - Then run `flutter pub get`
   - Then run `flutter build web --release`
   - Finally deploy the `build/web` directory

### Step 7: Get Your URL
- Once deployed, you'll see:
  - **Production URL**: `https://flashcard-viewer-flutter.vercel.app` (or similar)
- Copy this URL!

---

## ✅ Verification Checklist

After deployment, check:

- [ ] App loads at the production URL
- [ ] Flashcards display correctly
- [ ] Navigation works (flip, next, previous)
- [ ] Progress bar shows correctly
- [ ] "← React Version" link appears in top left
- [ ] Refresh button works

---

## 🔗 Update React App Link (If Needed)

If your Flutter app gets a different URL than expected, update the React app:

**File**: `src/App.tsx`
**Line**: ~39

Change:
```tsx
<a href="/flutter/">
```

To:
```tsx
<a href="https://flashcard-viewer-flutter.vercel.app">
```

(Or use the actual Flutter app URL from Vercel)

---

## 📊 Summary

| Setting | Value |
|---------|-------|
| **Project Name** | `flashcard-viewer-flutter` |
| **Root Directory** | `mobile/flutter_app` |
| **Build Command** | `flutter build web --release` |
| **Output Directory** | `build/web` |
| **Install Command** | `flutter pub get` |
| **Framework** | Other |

---

## 🐛 Troubleshooting

### Build Fails?
1. Check build logs in Vercel dashboard
2. Verify Root Directory is `mobile/flutter_app`
3. Ensure Build Command is exactly: `flutter build web --release`
4. Ensure Output Directory is exactly: `build/web`

### Can't Find Root Directory Setting?
- It's in the project configuration screen BEFORE clicking Deploy
- Look for "Root Directory" with an "Edit" link next to it
- If you already deployed, go to: Project Settings → General → Root Directory

### Flutter Not Detected?
- Vercel auto-installs Flutter - you don't need to do anything
- If build fails with "flutter: command not found", check the Install Command includes `flutter pub get`

---

## 🎉 Success!

Once deployed, you'll have:
- ✅ React App: Your existing Vercel URL
- ✅ Flutter App: `https://flashcard-viewer-flutter.vercel.app`

Both **FREE** to host! 🚀

