#!/bin/bash

echo "🎉 WATT SAVINGS WEBSITE 3.0 LAUNCHER"
echo "======================================"

cd "$(dirname "$0")"

echo "📁 Current directory: $(pwd)"
echo ""

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found"
    exit 1
fi

echo "🔧 SETUP OPTIONS:"
echo "1. Quick launch (fix permissions & run)"
echo "2. Manual setup instructions"
echo "3. Alternative methods"
echo ""

read -p "Choose option (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🛠️  Attempting to fix npm permissions..."
        if sudo chown -R $(whoami) ~/.npm 2>/dev/null; then
            echo "✅ Permissions fixed!"
            
            echo "📦 Installing dependencies..."
            if npm install; then
                echo "✅ Dependencies installed!"
                echo ""
                echo "🚀 Starting development server..."
                echo "🌐 Website will be available at:"
                echo "   📱 http://localhost:5757"
                echo "   📱 http://127.0.0.1:5757"
                echo ""
                echo "Press Ctrl+C to stop the server"
                echo ""
                
                npm run dev
            else
                echo "❌ Failed to install dependencies"
                echo "Try option 2 for manual setup"
            fi
        else
            echo "❌ Could not fix permissions automatically"
            echo "Please run option 2 for manual instructions"
        fi
        ;;
        
    2)
        echo ""
        echo "📋 MANUAL SETUP INSTRUCTIONS:"
        echo "=============================="
        echo ""
        echo "Step 1: Fix npm permissions"
        echo "sudo chown -R \$(whoami) ~/.npm"
        echo ""
        echo "Step 2: Install dependencies"
        echo "npm install"
        echo ""
        echo "Step 3: Run the development server"
        echo "npm run dev"
        echo ""
        echo "Your website will be available at http://localhost:5757"
        ;;
        
    3)
        echo ""
        echo "🔄 ALTERNATIVE METHODS:"
        echo "======================"
        echo ""
        echo "Method 1: Use yarn (if available)"
        echo "yarn install && yarn dev"
        echo ""
        echo "Method 2: Use pnpm (if available)"  
        echo "pnpm install && pnpm dev"
        echo ""
        echo "Method 3: Use npx directly"
        echo "npx vite --port 5757"
        echo ""
        echo "Method 4: Global vite installation"
        echo "npm install -g vite"
        echo "vite --port 5757"
        ;;
        
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac