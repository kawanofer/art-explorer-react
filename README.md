# 🎨 Art Explorer React

> Uma aplicação moderna para explorar e descobrir obras de arte do Metropolitan Museum of Art

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://art-explorer-react-nu.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://met-museum-backend.onrender.com)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## 📖 Sobre o Projeto

O **Art Explorer React** é uma aplicação web que permite aos usuários explorar e descobrir obras de arte do renomado Metropolitan Museum of Art de Nova York. Com uma interface moderna e intuitiva, os usuários podem pesquisar por artistas, departamentos, visualizar detalhes das obras e gerenciar suas coleções favoritas.

## ✨ Funcionalidades

### 🔍 **Exploração de Arte**
- Navegação por milhares de obras de arte do Met Museum
- Carregamento dinâmico com paginação infinita
- Visualização de imagens em alta qualidade

### 🔎 **Sistema de Busca Avançado**
- **Busca por Artista**: Encontre obras de seus artistas favoritos
- **Busca por Departamento**: Explore por categorias (Pinturas, Esculturas, etc.)
- Filtros inteligentes e resultados relevantes

### ❤️ **Gerenciamento de Favoritos**
- Adicione/remova obras da sua coleção pessoal
- Persistência local dos favoritos
- Interface intuitiva com feedback visual

### 📱 **Interface Responsiva**
- Design adaptável para desktop, tablet e mobile
- Experiência otimizada em todos os dispositivos
- Navegação fluida e intuitiva

### 🎨 **Detalhes Completos das Obras**
- Modal com informações detalhadas
- Dados do artista, data, dimensões e técnica
- Múltiplas imagens quando disponível
- Link direto para o site oficial do Met

## 🛠️ Stack Tecnológica

### **Frontend**
- ⚛️ **React 19.0.0** - Biblioteca principal
- 🔷 **TypeScript 5.6.3** - Tipagem estática
- ⚡ **Vite 6.0.1** - Build tool e dev server
- 🎨 **Material-UI 5.14.19** - Componentes e design system
- 🗃️ **Redux Toolkit 2.8.2** - Gerenciamento de estado
- 🌐 **Axios 1.11.0** - Cliente HTTP
- 🎭 **Emotion** - CSS-in-JS para estilização

### **Ferramentas de Desenvolvimento**
- 🧪 **Jest** - Framework de testes
- 🧹 **ESLint** - Linter de código
- 💅 **Prettier** - Formatador de código
- 📝 **Lint-staged** - Linting em arquivos staged

### **Backend & API**
- 🖼️ **Met Museum API** - Dados das obras de arte
- 🌐 **Backend Custom** - Proxy e otimizações

## 📋 Requisitos

### **Sistema**
- 🟢 **Node.js**: ^20.0.0 || >=22.0.0
- 📦 **npm**: >= 9.0.0
- 🌐 **Navegadores modernos** (Chrome, Firefox, Safari, Edge)

## 🚀 Instalação

### **1. Clone os projetos**

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

### **2. Configure as variáveis de ambiente**

#### Front-end
```bash
# Crie o arquivo .env na pasta Frontend
touch .env

# Configure as variáveis necessárias
echo "VITE_BASE_URL=http://localhost:3001" > .env
```

#### Back-end
```bash
# Crie o arquivo .env na pasta do backend
touch .env

# Configure as variáveis necessárias
echo "MET_API_BASE_URL=https://collectionapi.metmuseum.org/public/collection/v1" > .env
echo "PORT=3001" >> .env
```

### **3. Execute os projetos**

#### Opção 1: Executar separadamente
```bash
# Terminal 1 - Backend
cd met-museum-backend
node server.js

# Terminal 2 - Frontend  
cd art-explorer-react/Frontend
npm run dev
```

## 📁 Estrutura do Projeto

```
art-explorer-react/
├── 📁 public/            # Arquivos estáticos  
├── 📁 src/
│   ├── 📁 api/           # Configuração de API
│   ├── 📁 components/    # Componentes reutilizáveis
│   ├── 📁 hooks/         # Hooks customizados
│   ├── 📁 pages/         # Páginas da aplicação
│   ├── 📁 redux/         # Estado global
│   ├── 📁 types/         # Tipos TypeScript
│   └── 📁 utils/         # Funções utilitárias
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


## 📊 Performance
- ⚡ **Lighthouse Score**: 95+
- 🎯 **Core Web Vitals**: Excelente
- 📦 **Bundle Size**: < 1MB
- 🔄 **Cache Strategy**: Service Worker + API cache