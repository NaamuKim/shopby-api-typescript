import createClient from 'openapi-fetch';
import OpenShopByApiPaths from '../openapi-generated-types';

const defaultShopByApiBaseUrl = 'https://shop-api.e-ncp.com';

interface GetClientParams {
  shopByApiBaseUrl?: string;
  clientId: string;
  platform: 'PC' | 'MOBILE_WEB' | 'IOS' | 'AOS';
  Version?: string;
}

// 해당 인터페이스를 사용하면 헤더가 무조건 존재하므로 헤더 에러가 안나는 것이 맞음
export function getClient({
  shopByApiBaseUrl = defaultShopByApiBaseUrl,
  clientId,
  platform,
  Version = '1.0',
}: GetClientParams) {
  return createClient<OpenShopByApiPaths>({
    baseUrl: shopByApiBaseUrl,
    headers: {
      Version,
      clientId,
      platform,
    },
  });
}
