import React, { Suspense } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppRouters } from "./router/routes";
import { Toaster } from "react-hot-toast";

import GlobalStyle from "./assets/global";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense
      fallback={<div className="flex justify-center text-3xl">Loading...</div>}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GlobalStyle />
          <AppRouters />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
