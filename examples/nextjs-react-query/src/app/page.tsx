import Image from 'next/image';
import ProductList from '@/app/ProductList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello, ShopBy!</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
        className="mt-8"
      />
      <ProductList />
    </main>
  );
}
