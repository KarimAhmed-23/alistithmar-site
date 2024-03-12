import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Footer({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);

  return (
    <footer className="section-style footer-section w-bg" id="footerSection">
      <div className="footer-area">
        <div className="container">
          <div className="row  gx-md-5">
            <div className="col-lg-4 col-md-12">
              <div className="footer-col footer-about">
                <div className="footer-logo mb-4 pe-2">
                  <Link className="d-block" href={`/${lang}`}>
                    <Image
                      src={lang === "en" ? '/img/logo-ltr-light.svg' : '/img/logo-light.svg'}
                      alt="Alistithmar"
                      width={246}
                      height={59}
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="about-text mb-0">
                  {page.home.footer.about}
                  {/* <br />
                  {page.home.footer.about1} */}
                  <br />
                  {page.home.footer.about2}
                </div>
              </div>
            </div>
            <div className="col-lg col-md-4">
              <div className="footer-col">
                <h4 className="col-title">{page.home.footer.contact}</h4>
                <ul className="col-list">
                  <li className="list-item">
                    <p className="item-val">{page.home.footer.mail}</p>
                  </li>
                  <li className="list-item">
                    <p className="item-val">{page.home.footer.location}</p>
                  </li>
                  <li className="list-item">
                    <p className="item-val">{page.home.footer.road}</p>
                  </li>
                  <li className="list-item">
                    <p className="item-val">
                      {page.home.footer.secondLocation}
                    </p>
                  </li>
                  <li className="list-item">
                    <Link
                      href="mailto:IPO-REIT@icap.com.sa"
                      className="item-val">
                      {page.home.footer.mail2}
                    </Link>
                  </li>
                  <li className="list-item d-none">
                    <p className="item-val">{page.home.footer.phone}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-md-4">
              <div className="footer-col">
                <h4 className="col-title">{page.home.footer.help}</h4>
                <ul className="col-list">
                  <li className="list-item">
                    <Link
                      href="https://misa.gov.sa/ar/"
                      target="_blank"
                      className="item-val">
                      {page.home.footer.investment}
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link
                      href="https://cma.org.sa/Pages/default.aspx"
                      target="_blank"
                      className="item-val">
                      {page.home.footer.money}
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link
                      href="https://www.saudiexchange.sa/wps/portal/tadawul/home/"
                      target="_blank"
                      className="item-val">
                      {page.home.footer.trade}
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link
                      href="https://rega.gov.sa/"
                      target="_blank"
                      className="item-val">
                      {page.home.footer.property}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-md-4">
              <div className="footer-col">
                <h4 className="col-title">{page.home.footer.helpLinks}</h4>
                <ul className="col-list">
                  <li className="list-item">
                    <Link href="#" className="item-val">
                      {page.home.footer.terms}
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link href="#" className="item-val">
                      {page.home.footer.responbility}
                    </Link>
                  </li>
                  <li className="list-item">
                    <Link href="#" className="item-val">
                      {page.home.footer.secret}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rights">
        <div className="container">
          <div className="wrapper">
            <p className="mb-0 order-2 order-sm-1">
              {page.home.footer.rights}
              {/* <span className="px-2">{new Date().getFullYear()}</span> */}
              {page.home.footer.company}
            </p>
            <div className="social-links order-1 order-sm-2">
              <Link href="#" className="link-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0718 0.0152575H4.62301C2.07501 0.0152575 0 2.07502 0 4.63827V19.0871C0 21.6351 2.05976 23.7101 4.62301 23.7101H19.0718C21.6198 23.7101 23.6948 21.6503 23.6948 19.0871V4.62301C23.6948 2.07502 21.6351 0 19.0718 0V0.0152575ZM7.32358 20.4755C7.32358 20.8264 7.04895 21.1011 6.69803 21.1011H4.04323C3.69231 21.1011 3.41768 20.8264 3.41768 20.4755V9.35283C3.41768 9.00191 3.69231 8.72727 4.04323 8.72727H6.69803C7.04895 8.72727 7.32358 9.00191 7.32358 9.35283V20.4755ZM5.37063 7.67451C3.9822 7.67451 2.85315 6.54545 2.85315 5.15702C2.85315 3.76859 3.9822 2.63954 5.37063 2.63954C6.75906 2.63954 7.88811 3.76859 7.88811 5.15702C7.88811 6.54545 6.75906 7.67451 5.37063 7.67451ZM21.1926 20.5213C21.1926 20.8417 20.9333 21.1011 20.6128 21.1011H17.7597C17.4393 21.1011 17.1799 20.8417 17.1799 20.5213V15.3032C17.1799 14.5251 17.4088 11.8856 15.1507 11.8856C13.3961 11.8856 13.0451 13.686 12.9688 14.4946V20.5213C12.9688 20.8417 12.7095 21.1011 12.3891 21.1011H9.62747C9.30706 21.1011 9.04768 20.8417 9.04768 20.5213V9.2918C9.04768 8.97139 9.30706 8.71202 9.62747 8.71202H12.3891C12.7095 8.71202 12.9688 8.97139 12.9688 9.2918V10.2683C13.6249 9.2918 14.5861 8.54418 16.6459 8.54418C21.2079 8.54418 21.1774 12.801 21.1774 15.1507V20.5366L21.1926 20.5213Z" />
                </svg>
              </Link>
              <Link href="#" className="link-item">
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0331 10.4489L2.28862 0.21112C1.26637 -0.383921 0 0.348437 0 1.53852V22.014C0 23.1889 1.26637 23.9212 2.28862 23.3414L20.0331 13.1037C21.0553 12.5239 21.0553 11.0439 20.0331 10.4641" />
                </svg>
              </Link>
              <Link href="#" className="link-item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.58032 4.20728L7.96748 8.73874C8.3184 9.21173 9.00499 9.31853 9.44746 8.93709C9.44746 8.93709 9.44745 8.93709 9.46271 8.92183C9.88992 8.5404 9.99672 7.9301 9.66106 7.47237L7.54027 4.63448C7.34192 4.37511 7.03677 4.22253 6.70111 4.22253H4.58032V4.20728Z" />
                  <path d="M8.15056 11.0425C8.07428 11.3476 7.96747 11.6375 7.98273 11.9732C8.01325 12.9802 8.40994 13.8499 8.98972 14.5517L9.98146 13.4837L8.15056 11.0425Z" />
                  <path d="M9.92041 15.3603C10.4849 15.7112 11.1258 15.9553 11.8429 16.0011L10.7291 14.5059L9.93567 15.3755L9.92041 15.3603Z" />
                  <path d="M13.9942 16.7794L15.9166 19.3579C16.115 19.6173 16.4201 19.7698 16.7558 19.7698H18.8613L15.6725 15.513C15.3216 15.0553 14.696 14.9943 14.223 15.2994C14.223 15.2994 14.223 15.2994 14.2078 15.2994C13.7195 15.6046 13.6433 16.3064 13.9942 16.7641V16.7794Z" />
                  <path d="M8.73035 9.76087L13.2313 15.7876C13.9331 15.5587 14.5282 15.1773 15.0164 14.6433L10.3171 8.35718C9.6458 8.66233 9.1423 9.16582 8.73035 9.76087Z" />
                  <path d="M14.3298 8.76921C13.6585 8.28097 12.8804 7.93005 11.9802 7.9453C11.8581 7.9453 11.7513 8.00633 11.614 8.02159L13.1398 10.0508L14.3298 8.76921Z" />
                  <path d="M15.7488 13.5447C15.9471 13.0565 16.0692 12.5377 16.054 12.0037C16.0387 11.1035 15.6878 10.3254 15.1995 9.65405L13.8874 11.073L15.7335 13.5447H15.7488Z" />
                  <path d="M23.942 6.40424C23.82 2.80347 21.1499 0.133416 17.5492 0.0571291C14.223 -0.00390083 10.8816 -0.0191583 7.54026 0.0266141C3.46652 0.102901 0.14039 3.39851 0.0488451 7.47226C-0.0274422 10.8136 -0.0121848 14.155 0.0793601 17.4812C0.170905 21.1735 2.8257 23.8435 6.4875 23.9198C10.1493 24.0114 13.7958 24.0114 17.4576 23.9198C21.211 23.8435 23.82 21.1887 23.9726 17.4659C24.0336 15.635 23.9726 13.8346 23.9726 12.0037C23.9726 10.1728 24.0336 8.25039 23.9573 6.40424H23.942ZM16.0539 11.9885C16.0539 12.3547 16.0082 12.7056 15.9166 13.0412C15.8251 13.3616 15.8556 13.6973 16.0539 13.9567L20.0819 19.3578C20.6007 20.0444 20.1124 21.0209 19.2427 21.0209H16.115C15.7793 21.0209 15.4741 20.8683 15.2758 20.6089L12.087 16.3521C11.9192 16.1232 11.6598 16.0012 11.3699 15.9402C11.08 15.8791 10.7901 15.8028 10.5307 15.6808C10.134 15.5129 9.66105 15.6045 9.37116 15.9249L4.97701 20.6852C4.77866 20.8988 4.50403 21.0209 4.21413 21.0209H2.97828L8.39468 15.162C8.69983 14.8264 8.76086 14.3381 8.532 13.9414C8.19633 13.3616 7.96747 12.7056 7.95221 11.9732C7.95221 11.6528 8.05902 11.3477 8.12005 11.0425L3.34446 4.63437C2.8257 3.94778 3.31394 2.97131 4.18362 2.97131H7.3114C7.64707 2.97131 7.95221 3.12388 8.15056 3.38326L11.6293 8.02153C11.7513 8.02153 11.8581 7.94524 11.9954 7.94524C12.6057 7.94524 13.1703 8.09782 13.6738 8.35719C14.0857 8.5708 14.6045 8.49451 14.9249 8.14359L19.4106 3.29171C19.6089 3.07811 19.8836 2.95605 20.1735 2.95605H21.4093L15.7488 9.05904C15.4436 9.37944 15.3826 9.86768 15.5962 10.2491C15.8708 10.7679 16.0539 11.3477 16.0692 11.9885H16.0539Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
