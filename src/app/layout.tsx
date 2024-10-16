import type { Metadata } from 'next';
import { Roboto_Flex, Saira_Stencil_One } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/layout/MainHeader';
import { LanguageContextProvider } from '@/context';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  variable: '--roboto',
});

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--saira',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageContextProvider>
        <body
          className={`w-full min-h-screen overflow-y-scroll flex justify-center bg-background ${roboto.variable} ${sairaStencilOne.variable}`}
        >
          <div className="w-11/12 py-6">
            <MainHeader />
            {children}
          </div>
        </body>
      </LanguageContextProvider>
    </html>
  );
}
