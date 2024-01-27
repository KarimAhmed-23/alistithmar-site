import 'bootstrap/dist/css/bootstrap.min.css';
import { Almarai } from 'next/font/google';
import './globals.css';
import { i18n } from '@/i18n.config';
import { RootLayoutProps } from '@/types/Layout.types';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Meta from './components/navbar/meta';


const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700'],
  display: 'swap',
  style: ['normal'],
  variable: '--font-almarai',
});


// generate static params
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  // console.log(params.lang)
  return (
    <html lang={params.lang} dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <Meta  lang={params.lang}/>
      </head>
      <body className={almarai.className}>
        <Navbar lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang}/>
      </body>
    </html>
  );
}
