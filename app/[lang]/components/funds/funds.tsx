import React from 'react'
import Image from 'next/image';
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary';
import Slider from './slider';

export default async function Funds({ lang }: { lang: Locale }) {
	const { page } = await getDictionary(lang);

	return (
		<section className="section-style funds-section w-bg" id="fundsSection" style={{ backgroundImage: `url(${'/img/funds-bg.png'})` }}>
			<div className="funds-area">
				<div className="container">
					<h1 className="main-title more-mb">
						{page.home.funds.title}
					</h1>
					<div className='c-wrapper w-bg pt-0 mt-0 '>
						<div className='map-container'>
						<Image
							src={lang === "en" ? '/img/map-en.svg' : '/img/map-ar.svg'}
							alt="funds map"
							width={400}
							height={400}
							className="img-fluid w-100"
							loading='eager'
						/>
						</div>
					</div>
					<Slider fundsData={page.home.funds.fundsData} />
				</div>
			</div>
		</section>
	)
}