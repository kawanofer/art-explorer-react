# 🎨 Art Explorer - Processo de Desenvolvimento

## 📋 Visão Geral do Projeto

O **Art Explorer** é uma aplicação full-stack desenvolvida para explorar e descobrir obras de arte do Metropolitan Museum of Art. O projeto consiste em um backend Node.js/Express que atua como proxy para a API do Met Museum e um frontend React moderno com TypeScript.

## 🏗️ Arquitetura e Decisões Técnicas

### Backend (Node.js/Express)

#### ✅ Decisões Implementadas

**1. Sistema de Cache Inteligente**
- **Tecnologia**: `node-cache` com TTL de 1 hora
- **Motivação**: A API do Met Museum tem limitações de rate limiting e pode retornar erros 403 com múltiplas requisições simultâneas
- **Benefícios**: Redução significativa de chamadas à API externa, melhoria na performance e experiência do usuário

**2. Rate Limiting e Queue System**
- **Tecnologia**: `p-queue` com concorrência limitada (3 requests simultâneas, 10 requests por intervalo de 2s)
- **Motivação**: Prevenir bloqueios por rate limiting da API do Met Museum
- **Implementação**: Sistema de fila com retry automático para erros 403 usando exponential backoff

**3. Proxy API Pattern**
- **Estrutura**: Backend atua como intermediador entre frontend e API do Met Museum
- **Benefícios**: Centralização da lógica de cache, rate limiting e error handling
- **Endpoints**: 5 endpoints principais cobrindo busca por imagens, artista, departamento e detalhes

**4. Error Handling Robusto**
- Retry automático para erros 403 com backoff exponencial
- Logs detalhados para debugging
- Responses estruturadas com status codes apropriados

### Frontend (React/TypeScript)

#### ✅ Decisões Implementadas

**1. Arquitetura de Componentes Modulares**
- **Pattern**: Atomic Design principles com componentes reutilizáveis
- **Estrutura**: Separação clara entre components, pages, hooks, contexts
- **Benefícios**: Manutenibilidade, testabilidade e escalabilidade

**2. Gerenciamento de Estado**
- **Redux Toolkit**: Para estado global (lista de artworks, loading states)
- **useState local**: Para estados específicos de componentes
- **localStorage**: Para persistência de favoritos
- **Motivação**: Separação de responsabilidades e performance otimizada

**3. Sistema de Theming Avançado**
- **Tecnologias**: styled-components + Context API
- **Features**: Dark/Light mode com persistência, theming tipado
- **Implementação**: Custom hooks (`useTheme`) e context providers

**4. Design System e UI/UX**
- **Material-UI**: Componentes base com customizações
- **styled-components**: Estilização avançada e theming
- **Animações**: Framer Motion para micro-interações
- **Responsividade**: Design mobile-first com breakpoints consistentes

**5. Performance e Otimização**
- **Lazy Loading**: Componentes carregados sob demanda
- **Paginação**: Sistema de "Load More" para evitar sobrecarga
- **Memoização**: Uso estratégico de useMemo e useCallback
- **Otimização de imagens**: Fallbacks e loading states

**6. Developer Experience**
- **TypeScript**: Tipagem completa em todo o projeto
- **Testing**: Jest + Testing Library com boa cobertura
- **Linting**: ESLint + Prettier para consistência de código

#### 🔧 Stack Técnica Detalhada

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

## 🚫 Ideias Descartadas e Justificativas

### Frontend

**1. React Hook Form** ❌
- **Motivação para descarte**: O projeto possui apenas um input de busca e um radio group simples
- **Justificativa**: Overhead desnecessário para formulários tão simples
- **Alternativa adotada**: useState nativo para gerenciar os valores dos inputs

**2. React Query / TanStack Query** ❌
- **Motivação para descarte**: Cache padrão de 5 minutos não era interessante para o caso de uso
- **Justificativa**: Implementação de cache customizado no backend foi mais eficiente
- **Benefícios da decisão**: Controle total sobre o cache, melhor performance, menos overhead no frontend

### Backend

**2. Database/Persistence Layer** ❌
- **Motivação**: Dados vêm diretamente da API do Met Museum
- **Cache em memória**: Suficiente para os requisitos do projeto
- **Justificativa**: Simplicidade e performance adequadas

## 🚀 Sugestões de Melhorias Futuras

### **Server-Sent Events (SSE) - PRIORIDADE ALTA** 🔥

**Problema Atual**: 
- Frontend fica "travado" aguardando múltiplas requisições da API do Met Museum
- Experiência do usuário degradada durante buscas que retornam muitos resultados

**Benefícios**:
- Interface não bloqueia durante carregamento
- Artworks aparecem progressivamente
- Melhor feedback visual para o usuário
- Possibilidade de cancelar requisições