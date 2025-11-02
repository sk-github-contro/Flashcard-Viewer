#!/bin/bash
# Script to sync shared flashcards data to web and mobile apps

echo "🔄 Syncing flashcards data..."

# Copy shared data to web app
cp shared/data/flashcards.json src/data/flashcards.json
echo "✅ Copied to web app (src/data/)"

# Copy shared data to mobile app assets
cp shared/data/flashcards.json mobile/flutter_app/assets/flashcards.json
echo "✅ Copied to mobile app (mobile/flutter_app/assets/)"

echo "✨ Data sync complete!"

