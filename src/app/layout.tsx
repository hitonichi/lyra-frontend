import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';
import STRINGS from '@/lib/strings';
import RQProvider from '@/contexts/RQProvider';
import { CartProvider } from '@/contexts/CartContext';
import { getCart } from './services/cart';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

const open_sans = Open_Sans({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: STRINGS.appName,

  description: 'a place to manage them all',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let cart: Cart = {
    products: [
      {
        _id: '1',
        overallRating: 4,
        productName: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        quantity: 1,
        category: [{ name: 'Category 1' }],
      },
      {
        _id: '2',
        overallRating: 5,
        productName: 'Product 2',
        description: 'Product 2 description',
        price: 200,
        quantity: 2,
        category: [{ name: 'Category 2' }],
      },
    ],
  };
  // const session = await auth();
  // if (session) {
  //   const res = await getCart();
  //   cart.products = res;
  // }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon?png" type="image/png" sizes="any" />
        <link rel="icon" href="/icon?png" type="image/png" sizes="32x32" />
      </head>
      {/* <body className={`${inter.className}`}>{children}</body> */}
      <body className={`${open_sans.className} ${inter.className}`}>
        <RQProvider>
          <CartProvider cart={cart}>{children}</CartProvider>
        </RQProvider>
      </body>
    </html>
  );
}
