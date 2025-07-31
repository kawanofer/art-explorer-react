import React, { Suspense } from "react";

import Toast from "./components/Toast";
import { AppRouters } from "./router/routes";

function App() {
  return (
    <Suspense
      fallback={<div className="flex justify-center text-3xl">Loading...</div>}
    >
      <AppRouters />
      <Toast />
    </Suspense>
  );
}

export default App;
