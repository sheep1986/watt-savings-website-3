#!/bin/bash

echo "🚀 Setting up Watt Savings Website..."

# Check if npm is working
if ! npm --version > /dev/null 2>&1; then
    echo "❌ npm is not available"
    exit 1
fi

echo "📦 Installing dependencies..."

# Try to install with npm
if npm install; then
    echo "✅ Dependencies installed successfully!"
    
    echo "🌐 Starting development server on port 5656..."
    echo "📱 Your website will be available at:"
    echo "   🔗 http://localhost:5656"
    echo "   🔗 http://127.0.0.1:5656"
    echo ""
    echo "Press Ctrl+C to stop the server"
    
    npm run dev
else
    echo "❌ Failed to install dependencies"
    echo ""
    echo "🔧 Manual installation steps:"
    echo "1. Fix npm permissions with:"
    echo "   sudo chown -R \$(whoami) ~/.npm"
    echo ""
    echo "2. Then run:"
    echo "   npm install"
    echo "   npm run dev"
    echo ""
    echo "3. Or use npx:"
    echo "   npx vite --port 5656"
fi