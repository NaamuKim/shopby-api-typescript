import createClient from 'openapi-fetch';
import OpenShopByApiPaths from '../openapi-generated-types';

const defaultShopByApiBaseUrl = 'https://shop-api.e-ncp.com';

interface GetClientParams {
  shopByApiBaseUrl?: string;
  clientId: string;
  platform: 'PC' | 'MOBILE_WEB' | 'IOS' | 'AOS';
  version?: string;
}
export function getClient({
  shopByApiBaseUrl = defaultShopByApiBaseUrl,
  clientId,
  platform,
  version = '1.0',
}: GetClientParams) {
  return createClient<OpenShopByApiPaths>({
    baseUrl: shopByApiBaseUrl,
    headers: {
      Version: version,
      clientId,
      platform,
    },
  });
}
