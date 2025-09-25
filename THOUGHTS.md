# 🎨 Art Explorer - Development Process

## 📋 Project Overview

**Art Explorer** is a full-stack application developed to explore and discover artworks from the Metropolitan Museum of Art. The project consists of a Node.js/Express backend that acts as a proxy for the Met Museum API and a modern React frontend with TypeScript.

## 🏗️ Architecture and Technical Decisions

### Backend (Node.js/Express)

#### ✅ Implemented Decisions

**1. Intelligent Cache System**
- **Technology**: `node-cache` with 1-hour TTL
- **Motivation**: The Met Museum API has rate limiting restrictions and can return 403 errors with multiple simultaneous requests
- **Benefits**: Significant reduction in external API calls, improved performance and user experience

**2. Rate Limiting and Queue System**
- **Technology**: `p-queue` with limited concurrency (3 simultaneous requests, 10 requests per 2s interval)
- **Motivation**: Prevent blocking due to Met Museum API rate limiting
- **Implementation**: Queue system with automatic retry for 403 errors using exponential backoff

**3. Proxy API Pattern**
- **Structure**: Backend acts as intermediary between frontend and Met Museum API
- **Benefits**: Centralization of cache logic, rate limiting, and error handling
- **Endpoints**: 5 main endpoints covering search by images, artist, department, and details

**4. Robust Error Handling**
- Automatic retry for 403 errors with exponential backoff
- Detailed logs for debugging
- Structured responses with appropriate status codes

### Frontend (React/TypeScript)

#### ✅ Implemented Decisions

**1. Modular Component Architecture**
- **Pattern**: Atomic Design principles with reusable components
- **Structure**: Clear separation between components, pages, hooks, contexts
- **Benefits**: Maintainability, testability, and scalability

**2. State Management**
- **Redux Toolkit**: For global state (artwork lists, loading states)
- **Local useState**: For component-specific states
- **localStorage**: For favorites persistence
- **Motivation**: Separation of concerns and optimized performance

**3. Advanced Theming System**
- **Technologies**: styled-components + Context API
- **Features**: Dark/Light mode with persistence, typed theming
- **Implementation**: Custom hooks (`useTheme`) and context providers

**4. Design System and UI/UX**
- **Material-UI**: Base components with customizations
- **styled-components**: Advanced styling and theming
- **Animations**: Framer Motion for micro-interactions
- **Responsiveness**: Mobile-first design with consistent breakpoints

**5. Performance and Optimization**
- **Lazy Loading**: Components loaded on demand
- **Pagination**: "Load More" system to avoid overload
- **Memoization**: Strategic use of useMemo and useCallback
- **Image optimization**: Fallbacks and loading states

**6. Developer Experience**
- **TypeScript**: Complete typing throughout the project
- **Testing**: Jest + Testing Library with good coverage
- **Linting**: ESLint + Prettier for code consistency

#### 🔧 Detailed Tech Stack

```json
{
  "core": ["React 19.0.0", "TypeScript 5.6.3", "Vite 6.0.1"],
  "state": ["Redux Toolkit 2.8.2", "React Context API"],
  "styling": ["Material-UI 5.14.19", "styled-components", "Emotion"],
  "animation": ["Framer Motion 12.23.12"],
  "http": ["Axios 1.11.0"],
  "testing": ["Jest", "@testing-library/react", "User Event"],
  "quality": ["ESLint", "Prettier", "Husky"],
  "utilities": ["Lodash", "Moment.js", "React Hot Toast"]
}
```

## 🚫 Discarded Ideas and Justifications

### Frontend

**1. React Hook Form** ❌
- **Reason for discarding**: The project has only one search input and a simple radio group
- **Justification**: Unnecessary overhead for such simple forms
- **Alternative adopted**: Native useState to manage input values

**2. React Query / TanStack Query** ❌
- **Reason for discarding**: Default 5-minute cache wasn't suitable for the use case
- **Justification**: Custom cache implementation in the backend was more efficient
- **Benefits of the decision**: Full control over cache, better performance, less frontend overhead

### Backend

**2. Database/Persistence Layer** ❌
- **Motivation**: Data comes directly from the Met Museum API
- **In-memory cache**: Sufficient for project requirements
- **Justification**: Adequate simplicity and performance

## 🚀 Future Improvement Suggestions

### **Server-Sent Events (SSE) - HIGH PRIORITY** 🔥

**Current Problem**: 
- Frontend gets "stuck" waiting for multiple Met Museum API requests
- Degraded user experience during searches that return many results

**Benefits**:
- Interface doesn't block during loading
- Artworks appear progressively
- Better visual feedback for users
- Ability to cancel requests