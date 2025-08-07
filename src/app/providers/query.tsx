import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 минута
        retry: (failureCount, error: any) => {
          if (error?.code === "INVALID_TOKEN") {
            return false;
          }

          return failureCount <= 1;
        },
      },
      mutations: {
        retry: (failureCount, error: any) => {
          if (error?.code === "INVALID_TOKEN") {
            return false;
          }

          return failureCount <= 1;
        },
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
