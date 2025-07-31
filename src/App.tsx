import React, { Suspense } from "react";

import { ThemeProvider } from "styled-components";
import CustomTheme from "./assets/theme/CustomTheme";
import Toast from "./components/Toast";
import { AppRouters } from "./router/routes";

function App() {
  return (
    <Suspense
      fallback={<div className="flex justify-center text-3xl">Loading...</div>}
    >
      <ThemeProvider theme={CustomTheme}>
        <AppRouters />
        <Toast />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
