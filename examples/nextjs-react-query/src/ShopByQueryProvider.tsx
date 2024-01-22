'use client';

import React, { createContext, useContext, useRef } from 'react';
import { paths } from '@/shopby-api/openapi-types/shopby-api-types';
import createClient from 'openapi-fetch';
import { getClient } from '../../../shopby-api-fetch/openapi-fetch-client';

export type OpenApiClient = ReturnType<typeof createClient<paths>>;
export const ShopByQueryClientContext = createContext<OpenApiClient | null>(
  null
);

interface Props {
  client: OpenApiClient;
  children: React.ReactNode;
}

export function ShopByQueryProvider({ client, children }: Props) {
  return (
    <ShopByQueryClientContext.Provider value={client}>
      {children}
    </ShopByQueryClientContext.Provider>
  );
}

export function ShopByProvider({ children }: { children: React.ReactNode }) {
  const shopByQueryClientRef = useRef<OpenApiClient>(
    getClient({
      clientId: '123',
      platform: 'PC',
    })
  );
  return (
    <ShopByQueryProvider client={shopByQueryClientRef.current}>
      {children}
    </ShopByQueryProvider>
  );
}

export function useShopByQueryClient() {
  const client = useContext(ShopByQueryClientContext);
  if (!client)
    throw new Error(
      'useShopByQueryClient must be used within a ShopByQueryProvider'
    );
  return client;
}
