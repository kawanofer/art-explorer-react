import { Suspense } from 'react';

import { Toaster } from 'react-hot-toast';

import GlobalStyle from './assets/global';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppRouters } from './router/routes';

function App() {
  return (
    <Suspense
      fallback={<div className="flex justify-center text-3xl">Loading...</div>}
    >
      <ThemeProvider>
        <GlobalStyle />
        <AppRouters />
        <Footer />
        <Toaster />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
