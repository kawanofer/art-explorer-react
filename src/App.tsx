import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyle from "./assets/global";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppRouters } from "./router/routes";

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
