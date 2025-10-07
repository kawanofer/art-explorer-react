# 🎨 Art Explorer React

> A modern application to explore and discover artworks from the Metropolitan Museum of Art

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://art-explorer-react-nu.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://met-museum-backend.onrender.com)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## 📖 About the Project

**Art Explorer React** is a web application that allows users to explore and discover artworks from the renowned Metropolitan Museum of Art in New York. With a modern and intuitive interface, users can search by artists, departments, view artwork details, and manage their favorite collections.

## 🎬 Preview

*Interactive demo showing the main features of Art Explorer React*

> 📺 **[View Full Demo](https://jam.dev/c/8e6a07d8-e85a-4d46-be67-b20175026355)** - Click to see the application in action

<div align="center">
  <img src="./src/assets/preview/preview.gif" alt="Art Explorer Demo" width="100%">
</div>

## ✨ Features

### 🔍 **Art Exploration**
- Browse through thousands of artworks from the Met Museum
- Dynamic loading with infinite pagination
- High-quality image viewing

### 🔎 **Advanced Search System**
- **Artist Search**: Find works by your favorite artists
- **Department Search**: Explore by categories (Paintings, Sculptures, etc.)
- Smart filters and relevant results

### ❤️ **Favorites Management**
- Add/remove artworks from your personal collection
- Local persistence of favorites
- Intuitive interface with visual feedback

### 📱 **Responsive Interface**
- Adaptive design for desktop, tablet, and mobile
- Optimized experience across all devices
- Smooth and intuitive navigation

### 🎨 **Complete Artwork Details**
- Modal with detailed information
- Artist data, date, dimensions, and technique
- Multiple images when available
- Direct link to the official Met website

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React 19.0.0** - Main library
- 🔷 **TypeScript 5.6.3** - Static typing
- ⚡ **Vite 6.0.1** - Build tool and dev server
- 🎨 **Material-UI 5.14.19** - Components and design system
- 🗃️ **Redux Toolkit 2.8.2** - State management
- 🌐 **Axios 1.11.0** - HTTP client
- 🎭 **Emotion** - CSS-in-JS for styling

### **Development Tools**
- 🧪 **Jest** - Testing framework
- 🧹 **ESLint** - Code linter
- 💅 **Prettier** - Code formatter
- 📝 **Lint-staged** - Linting on staged files

### **Backend & API**
- 🖼️ **Met Museum API** - Artwork data
- 🌐 **Custom Backend** - Proxy and optimizations

## 📋 Requirements

### **System**
- 🟢 **Node.js**: ^20.0.0 || >=22.0.0
- 📦 **npm**: >= 9.0.0
- 🌐 **Modern browsers** (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

### **1. Clone the projects**

#### Front-end
```bash
git clone https://github.com/kawanofer/art-explorer-react.git
cd art-explorer-react  
npm install
```

#### Back-end
```bash
git clone https://github.com/kawanofer/met-museum-backend.git
cd met-museum-backend
npm install
```

### **2. Configure environment variables**

#### Front-end
```bash
# Create the .env file in the Frontend folder
touch .env

# Configure the necessary variables
echo "VITE_BASE_URL=http://localhost:3001" > .env
```

#### Back-end
```bash
# Create the .env file in the backend folder
touch .env

# Configure the necessary variables
echo "MET_API_BASE_URL=https://collectionapi.metmuseum.org/public/collection/v1" > .env
echo "PORT=3001" >> .env
```

### **3. Run the projects**

#### Option 1: Run separately
```bash
# Terminal 1 - Backend
cd met-museum-backend
node server.js

# Terminal 2 - Frontend  
cd art-explorer-react/Frontend
npm run dev
```

## 📁 Project Structure

```
art-explorer-react/
├── 📁 public/            # Static files  
├── 📁 src/
│   ├── 📁 api/           # API configuration
│   ├── 📁 components/    # Reusable components
│   ├── 📁 hooks/         # Custom hooks
│   ├── 📁 pages/         # Application pages
│   ├── 📁 redux/         # Global state
│   ├── 📁 types/         # TypeScript types
│   └── 📁 utils/         # Utility functions
├── 📄 package.json
├── 📄 vite.config.ts
└── 📄 tsconfig.json
└── 📄 README.md
```

## 🚀 Deploy

### **Frontend - Vercel**
🔗 **URL**: [https://art-explorer-react-nu.vercel.app/](https://art-explorer-react-nu.vercel.app/)

### **Backend - Render**
🔗 **URL**: [https://met-museum-backend.onrender.com](https://met-museum-backend.onrender.com)
