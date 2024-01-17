import React from 'react';
import { getClient } from '../../../../../shopby-api-fetch/openapi-fetch-client';
import Image from 'next/image';

interface Props {
  eventNo: string;
}
export async function getServerSideProps({ params }: { params: Props }) {
  return {
    props: {
      eventNo: params.eventNo,
    },
  };
}

async function Event({ eventNo }: Props) {
  const client = getClient({
    // use your shop information parameters
    clientId: '123',
    platform: 'PC',
  });

  const { data } = await client.GET('/display/events/{eventNo}', {
    params: {
      path: {
        eventNo,
      },
    },
  });

  return (
    <>
      <h4>{data?.label}</h4>
      {data?.coupon.guideImageUrl && (
        <Image
          width={500}
          height={500}
          src={data.coupon.guideImageUrl}
          alt={data?.label + '쿠폰 사용 가이드' || '쿠폰 사용 가이드'}
        />
      )}
    </>
  );
}
export default Event;
