'use client';
import React, { useState } from 'react';
import LocaleSwitcher from './locale-switcher';
import { Locale } from '@/i18n.config';
// import { Locale } from '@/i18n/i18n-config';

interface MobileMenuProps {
  navigation: {
    home: string;
    whoWeAre: string;
    fundDocuments: string;
    boardOfDirectors: string;
    fundAssets: string;
    news: string;
    contactUs: string;
  };
	lang: Locale
}
function MobileMenu({ navigation , lang}: MobileMenuProps) {
  const [active, setActive] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(1);
  const handleOpenUserMenu = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount % 2 !== 0) {
      // First click
      setActive(true);
    } else {
      // Second click
      setActive(false);
    }
  };

  return (
    <>
      <ul className={`nav-list ${active ? 'active' : ''}`}>
        <li className="list-item">
          <a className="item-link" href="#heroSection">
            {navigation.home}
          </a>
        </li>
        <li className="list-item">
          <a className="item-link" href="#aboutSection">
            {navigation.whoWeAre}
          </a>
        </li>
        <li className="list-item">
          <a className="item-link" href="#documentSection">
            {navigation.fundDocuments}
          </a>
        </li>
        <li className="list-item">
          <a className="item-link" href="#directorsSection">
            {navigation.boardOfDirectors}
          </a>
        </li>
        <li className="list-item d-none">
          <a className="item-link" href="#fundsSection">
            {navigation.fundAssets}
          </a>
        </li>
        <li className="list-item">
          <a className="item-link" href="#">
            {navigation.news}
          </a>
        </li>

        <li className="list-item">
          <a className="item-link" href="#contactSection">
            {navigation.contactUs}
          </a>
        </li>
        <LocaleSwitcher lang={lang} />
      </ul>
      <div
        className={`nav-toggler mobile-item ${active ? 'opened' : ''}`}
        data-target="nav-list"
        onClick={handleOpenUserMenu}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
          <path className="line line2" d="M 20,50 H 80"></path>
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
        </svg>
      </div>
    </>
  );
}

export default MobileMenu;
