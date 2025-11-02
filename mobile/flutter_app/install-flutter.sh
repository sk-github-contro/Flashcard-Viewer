#!/bin/bash
set -e

echo "📦 Installing Flutter..."

# Install Flutter using official method
export PATH="$PATH:$HOME/flutter/bin"

# Download Flutter if not already installed
if [ ! -d "$HOME/flutter" ]; then
  echo "Downloading Flutter SDK..."
  cd $HOME
  git clone https://github.com/flutter/flutter.git -b stable --depth 1
  export PATH="$PATH:$HOME/flutter/bin"
fi

# Verify Flutter installation
flutter --version

# Accept licenses
flutter doctor --android-licenses || true

echo "✅ Flutter installed successfully"

