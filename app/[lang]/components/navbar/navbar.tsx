"use client";
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { useState, useEffect } from 'react';

export default function NavBar({ lang }: { lang: Locale }) {
  const [dictionary, setDictionary] = useState<{ navigation: any } | null>(null);
  const [small, setSmall] = useState<boolean>(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.scrollY > 0));
    }
    const fetchDictionary = async () => {
      const result = await getDictionary(lang);
      setDictionary(result);
    };

    fetchDictionary();
  }, [lang]);

  if (!dictionary) {
    return null;
  }

  const { navigation } = dictionary;


  return (
    <nav className={`top-nav ${small ? 'scroll' : 'top-nav'}`} id="navbar">
      <div className="container h-100">
        <div className="nav-content">
          <div className="nav-logo">
            <Link href={`/${lang}`} className="d-block">
              <Image
                src="/img/logo-black.svg"
                alt="Alistithmar"
                width={246}
                height={59}
                className="img-fluid"
              />
            </Link>
          </div>
          <MobileMenu navigation={navigation} lang={lang} />
        </div>
      </div>
    </nav>
  );
}
