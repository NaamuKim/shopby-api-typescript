'use client';
import React, { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: React.ReactNode;
}

const QueryProvider: React.FC<Props> = ({ children }) => {
  const queryClientRef = useRef<QueryClient>(new QueryClient());
  return (
    <QueryClientProvider client={queryClientRef.current}></QueryClientProvider>
  );
};

export default QueryProvider;
