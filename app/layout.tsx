import type { Metadata } from 'next';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import TopMenu from './components/TopMenu';
import { GenresProvider } from './data/GenresData';
import { Inter } from 'next/font/google';
import { GuestSessionProvider } from './data/SessionData';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <GuestSessionProvider>
          <GenresProvider>
            <AntdRegistry>
              <div className="top-menu">
                <TopMenu />
              </div>
              {children}
            </AntdRegistry>
          </GenresProvider>
        </GuestSessionProvider>
      </body>
    </html>
  );
}
