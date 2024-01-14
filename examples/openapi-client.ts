import { getClient } from '../shopby-api-fetch/openapi-fetch-client';

const client = getClient('https://shop-api.e-ncp.com', {
  clientId: '1234',
  platform: 'MOBILE_WEB',
  Version: '1.1',
});

async function fetchShopByAPI() {
  const { data } = await client.GET('/display/brands/{brandNo}', {
    params: {
      path: {
        brandNo: '123',
      },
    },
  });
}

async function fetchShopByAPI2() {
  const { data } = await client.GET('/free-gift-condition/{productNo}', {
    params: {
      path: {
        productNo: '123',
      },
      header: {
        accessToken: '123',
      },
    },
  });
}
