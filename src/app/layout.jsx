import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BgTechIcons from '@/components/canvas/BgTechIcons';

const montserrat = Montserrat({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  variable: '--font-body',
  display: 'swap',
});

import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  title: 'BIM Innovator - Giải pháp Số hóa và Digital Twin',
  description: 'Chuyên gia giải pháp BIM & Digital Twin — Cung cấp dịch vụ mô hình BIM, thiết kế BIM, đào tạo BIM và số hóa quản lý cho hạ tầng giao thông tại Việt Nam.',
  keywords: ['BIM', 'Digital Twin', 'Revit', 'Hạ tầng giao thông', 'Civil 3D', 'Chuyển đổi số', 'Hoàng Quốc Tuấn'],
  authors: [{ name: 'Hoàng Quốc Tuấn' }],
  openGraph: {
    title: 'BIM Innovator - Giải pháp Số hóa và Digital Twin',
    description: 'Chuyên gia giải pháp BIM & Digital Twin tại Việt Nam.',
    url: 'https://biminnovator.vn',
    siteName: 'BIM Innovator',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIM Innovator - Giải pháp Số hóa và Digital Twin',
    description: 'Chuyên gia giải pháp BIM & Digital Twin tại Việt Nam.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <LanguageProvider>
          <BgTechIcons />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
