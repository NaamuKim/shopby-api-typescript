import createClient from 'openapi-fetch';
import OpenShopByApiPaths from '../openapi-generated-types';

const defaultShopByApiBaseUrl = 'https://shop-api.e-ncp.com';

interface ShopByApiHeader {
  clientId: string;
  platform: 'PC' | 'MOBILE_WEB' | 'IOS' | 'AOS';
  Version?: string;
  accessToken?: string;
}

export function getClient(
  shopByApiBaseUrl: string = defaultShopByApiBaseUrl,
  { clientId, platform, Version, accessToken }: ShopByApiHeader
) {
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
