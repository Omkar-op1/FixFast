import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import SessionProvider from "@/components/SessionProvider";

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
      <SessionProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </SessionProvider>
        <script
  src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
  async
  defer
></script>
      </body>
    </html>
  );
}