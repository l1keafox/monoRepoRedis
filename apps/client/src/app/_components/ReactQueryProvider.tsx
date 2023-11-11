"use client";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export interface ReactQueryProviderProps extends React.HTMLAttributes<HTMLDivElement>{
}

export function ReactQueryProvider({children}:ReactQueryProviderProps) {
  const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
  );
}