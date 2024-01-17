import createClient from 'openapi-fetch';
import OpenShopByApiPaths from '../openapi-generated-types';

const defaultShopByApiBaseUrl = 'https://shop-api.e-ncp.com';

interface ShopByApiHeader {
  clientId: string;
  platform: 'PC' | 'MOBILE_WEB' | 'IOS' | 'AOS';
  Version?: string;
  accessToken?: string;
}
interface GetClientParams extends ShopByApiHeader {
  shopByApiBaseUrl?: string;
}

export function getClient({
  shopByApiBaseUrl = defaultShopByApiBaseUrl,
  clientId,
  platform,
  Version,
  accessToken,
}: GetClientParams) {
  return createClient<OpenShopByApiPaths>({
    baseUrl: shopByApiBaseUrl,
    headers: {
      Version,
      clientId,
      platform,
      accessToken,
    },
  });
}
