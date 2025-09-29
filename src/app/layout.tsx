// layout.tsx (Server Component)
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Campanha de Vacinação',
  description: 'Site informativo sobre vacinas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Topbar agora é um Client Component e controla a Sidebar */}
        <Topbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
