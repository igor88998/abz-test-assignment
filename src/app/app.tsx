import "@/app/styles/globals.css";
import React from "react";
import { AuthProvider } from "@/shared/lib";
import { RootLayout } from "./layouts/rootLayout";
import { UIProvider, QueryProvider } from "./providers";

const App: React.FC = () => {
  return (
    <QueryProvider>
      <UIProvider>
        <AuthProvider>
          <RootLayout />
        </AuthProvider>
      </UIProvider>
    </QueryProvider>
  );
};

export default App;
