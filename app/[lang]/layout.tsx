import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import localFont from 'next/font/local'
import { i18n } from '@/i18n.config';
import { RootLayoutProps } from '@/types/Layout.types';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Meta from './components/navbar/meta';


const CoText = localFont({
  src: [
    {
      path: './font/CoText-Regular.eot',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/CoText-Regular.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/CoText-Regular.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})


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
      <body className={CoText.className}>
        <Navbar lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang}/>
      </body>
    </html>
  );
}
