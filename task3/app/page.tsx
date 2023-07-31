import { AddProductDialog } from '@/components/productForm';
import { UserButton } from '@clerk/nextjs';
import { main } from './actions';
import { ProductCarousel } from '@/components/carousel';
import { Product } from '@prisma/client';
const SERVER_URL = 'http://localhost:3000'; // change this to your server's URL

async function getProducts() {
  const res = await fetch(`${SERVER_URL}/products`, {
    cache: 'no-cache',
    next: {
      tags: ['products'],
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const products: Product[] = await getProducts();

  return (
    <main>
      <nav className='flex align-baseline justify-end gap-3 pr-2 bg-slate-200 py-3 shadow-lg'>
        <AddProductDialog />
        <UserButton />
      </nav>
      <ProductCarousel products={products} />
    </main>
  );
}
