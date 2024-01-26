import React from 'react';
import Image from 'next/image';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import DocumentTabs from './document-tabs';

export default async function Statistics({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  return (
    <section className="section-style document-section" id="documentSection">
      <div className="document-area">
        <div className="container fluid">
          <div className="row gx-0">
            <div className="col-lg-4">
              <div
                className="document-banner"
                style={{
                  backgroundImage: `url(${'/img/Mask-Document.png'})`,
                }}>
                <div className="banner-img">
                  <Image
                    src="/img/EDITION.png"
                    alt="document banner"
                    width={246}
                    height={59}
                    className="img-fluid"
                  />
                </div>
                <h1 className="main-title banner-title text-center">
                  {page.home.document.title}
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <DocumentTabs lang={lang}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

