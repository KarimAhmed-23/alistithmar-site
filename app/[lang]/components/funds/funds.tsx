import React from 'react'
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
					<Slider fundsData={page.home.funds.fundsData} />
				</div>
			</div>
		</section>
	)
}