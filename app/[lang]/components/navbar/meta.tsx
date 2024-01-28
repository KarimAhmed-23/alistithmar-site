"use client";
import { Locale } from '@/i18n.config';
import React, { useState, useEffect } from 'react';
import { SEO } from '@/types/documents-data.moduels';


interface MataProps{
	lang: Locale;
}
function Meta({lang}: MataProps) {
	const [seo, setSeo] = useState<SEO>();
	const [error, setError] = useState<string>('');
	const[pageName, SetPageNme] = useState<string>('');
	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_INVESTMENT_URL}/api/pages?populate=deep&locale=${lang}`);
        const data = await response.json();
        const seo = data.data[0].attributes.seo;
				SetPageNme(data.data[0].attributes.PageName)
        setSeo(seo);
      } catch (error) {
        setError('An error occurred while fetching data');
      }
    };

    fetchData();
  }, [lang]);
	return (
		<>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="keywords" content={seo?.keywords ||''} />
			<meta name="description" content={seo?.metaDescription || ''} />
			<meta property="og:title" content={seo?.metaTitle} />
			<meta property="og:description" content={seo?.metaDescription || ''} />
			<meta property="og:image" content={seo?.metaSocial[0].image.data.attributes.url || ''} />
      <title>{pageName || ''}</title>
      <link rel="icon" href="/img/logo-sm.svg" sizes="16x16 32x32 48x48 64x64" />
    </>
  );
}

export default Meta;