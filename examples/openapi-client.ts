import { getClient } from '../shopby-api-fetch/openapi-fetch-client';

const client = getClient({
  clientId: '1234',
  platform: 'MOBILE_WEB',
  version: '1.1',
});

// TODO : header type casting
async function fetchShopByAPI() {
  const { data } = await client.GET('/display/brands/{brandNo}', {
    params: {
      path: {
        brandNo: '123',
      },
      header: {
        clientId: '1234',
        platform: 'Mo',
        Version: '1.1',
      },
    },
  });
}
