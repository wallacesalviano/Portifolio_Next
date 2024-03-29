import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { EdgeStoreProvider } from '@/lib/edgestore';
import ToastProvider from '@/providers/toast-provider';
import { ThemeProvider } from '@/providers/theme-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: 'Wallace — My Personal Profile',
  description:
    'Unveil my skills, projects, and journey on my personal website. A digital portfolio reflecting my passion and expertise. Explore now and do contact me.',
  openGraph: {
    url: '/',
    title: 'Wallace — My Personal Profile',
    description:
      'Unveil my skills, projects, and journey on my personal website. A digital portfolio reflecting my passion and expertise. Explore now and do contact me.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallace — My Personal Profile',
    description:
      'Unveil my skills, projects, and journey on my personal website. A digital portfolio reflecting my passion and expertise. Explore now and do contact me.'
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <EdgeStoreProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
            <ToastProvider />
          </ThemeProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
