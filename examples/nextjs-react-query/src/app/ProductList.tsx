'use client';
import React from 'react';
import { useShopByQuery } from '@/useShopByQuery';

const ProductList = () => {
  const { data } = useShopByQuery('/products/search', {
    params: {
      query: {
        'filter.keywords': '컴퓨터',
        pageNumber: 1,
        pageSize: 10,
      },
    },
  });
  return (
    <div>{data?.items?.map((item) => <span>{item.productName}</span>)}</div>
  );
};

export default ProductList;
