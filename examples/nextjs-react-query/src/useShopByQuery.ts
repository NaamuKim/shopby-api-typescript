import {
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { ClientOptions, ParseAs } from 'openapi-fetch';
import { paths } from '@/shopby-api/openapi-types/shopby-api-types';
import {
  Delete,
  Get,
  Patch,
  Post,
} from '@/shopby-api/openapi-types/shopby-api-flatten';
import { useShopByQueryClient } from '@/ShopByQueryProvider';

type EndpointLike = { params?: any; body?: any; data: any; error: any };

export type BaseOptions<TEndpoint extends EndpointLike> = Omit<
  RequestInit,
  'body'
> & {
  querySerializer?: TEndpoint['params']['query'] extends undefined
    ? never
    : (query: TEndpoint['params']['query']) => string;
  bodySerializer?: TEndpoint['body'] extends undefined
    ? never
    : (body: TEndpoint['body']) => any;
  parseAs?: ParseAs;
  fetch?: ClientOptions['fetch'];
};

export type QueryOptions<TEndpoint extends EndpointLike, TData> = Pick<
  TEndpoint,
  'params'
> &
  BaseOptions<TEndpoint> & {
    queryOptions?: Partial<
      UseQueryOptions<TEndpoint['data'], TEndpoint['error'], TData>
    >;
  };

export function useShopByGet<TUrl extends keyof Get, TData = Get[TUrl]['data']>(
  url: TUrl,
  ...init: Get[TUrl] extends { params: any }
    ? [QueryOptions<Get[TUrl], TData>]
    : [QueryOptions<Get[TUrl], TData>?]
): UseQueryResult<TData, Get[TUrl]['error']> & { queryKey: QueryKey } {
  const client = useShopByQueryClient();
  const [options] = init;
  const { queryOptions, ...requestOptions } = options || {};

  const queryKey = queryOptions?.queryKey ?? [
    'get',
    url,
    { params: (requestOptions as any)?.params },
  ];

  const result = useQuery({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data, error } = await client.GET(url, {
        ...requestOptions,
        signal,
      } as any);

      // React Query expects errors to be thrown to show a message
      if (error) throw error;

      return data as Get[TUrl]['data'];
    },
    ...queryOptions,
  });

  return {
    ...result,
    queryKey,
  };
}
