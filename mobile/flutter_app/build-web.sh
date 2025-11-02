#!/bin/bash
# Script to build Flutter web app

echo "🌐 Building Flutter Web App..."

cd "$(dirname "$0")"

# Check if Flutter is installed
if ! command -v flutter &> /dev/null; then
    echo "❌ Flutter is not installed. Please install Flutter first."
    echo "Visit: https://flutter.dev/docs/get-started/install"
    exit 1
fi

# Get dependencies
echo "📦 Installing dependencies..."
flutter pub get

# Build for web
echo "🔨 Building web release..."
flutter build web --release

echo ""
echo "✅ Build complete!"
echo "📁 Output directory: build/web"
echo ""
echo "🚀 To deploy:"
echo "   cd build/web"
echo "   vercel --prod"
echo ""
echo "Or deploy via Vercel dashboard with:"
echo "   Build Command: flutter build web --release"
echo "   Output Directory: build/web"

