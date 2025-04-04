import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata = {
  title: 'FixFast - On-Demand Electronics Repair Services',
  description: 'Book certified technicians for smartphone, laptop, and appliance repairs in minutes.',
  keywords: 'electronics repair, phone repair, laptop repair, appliance service',
  openGraph: {
    images: '/og-image.jpg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}