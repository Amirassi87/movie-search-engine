import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google'
 
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Movies Search Engine',
  description: 'Search for movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-mycolor">
        {children}
        </body>
    </html>
  );
}
