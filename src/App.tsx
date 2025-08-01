import React, { Suspense } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import CustomTheme from "./assets/theme/CustomTheme";
import { AppRouters } from "./router/routes";
import toast, { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense
      fallback={<div className="flex justify-center text-3xl">Loading...</div>}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={CustomTheme}>
          <AppRouters />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
