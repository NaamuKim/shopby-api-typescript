import React, { createContext, useContext } from 'react';
import { paths } from '@/shopby-api/openapi-types/shopby-api-types';
import createClient from 'openapi-fetch';

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

export function useShopByQueryClient() {
  const client = useContext(ShopByQueryClientContext);
  if (!client)
    throw new Error(
      'useShopByQueryClient must be used within a ShopByQueryProvider'
    );
  return client;
}
