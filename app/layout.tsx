import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import NetworkStatus from './components/NetworkStatus';
import TopMenu from './components/TopMenu';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
      <body>
        <AntdRegistry>
          <div className="top-menu">
            <TopMenu />
          </div>

          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
