// import { getDictionary } from '@/app/utils/dictionaries';
// import { Locale } from '@/i18n/i18n-config';
import React from 'react';
import FirstChart from './FirstChart';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import SecondChart from './SecondChart';




export default async function Statistics({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  const chartData = {
    labels: page.home.statistics.firstLabels,
    data: [23.8 , 21.3 , 7.8 , 9.5 , 23.2 ] ,
    backgroundColor: ['#000', '#dbb911', '#58595b', '#bfbfbf' , "#939598"],
  };
  const chartData2 = {
    labels: page.home.statistics.secondLabels,
    data: [43.6, 2.9, 52.1, 1.4],
    backgroundColor: ['#dbb911', '#bfbfbf', '#000', '#58595b'],
  };
  return (
    <section
      className="section-style statistics-section"
      id="statisticsSection">
      <div className="statistics-area">
        <div className="container">
          {/* <div className="row d-none">
            <div className="col-xl-7 col-lg-6">
              <div
                className="statistics-banner"
                style={{
                  backgroundImage: `url(${'/img/statistics-banner-1.png'})`,
                }}>
                <p className="banner-text">{page.home.statistics.firstTitle}</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              
            </div>
          </div>
          <div className="row d-none">
            <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
              
            </div>
            <div className="col-xl-7 col-lg-6 order-lg-2 order-1">
              <div
                className="statistics-banner"
                style={{
                  backgroundImage: `url(${'/img/statistics-banner-2.png'})`,
                }}>
                <p className="banner-text">
                  {page.home.statistics.secondTitle}
                </p>{' '}
              </div>
            </div>
          </div> */}

          <div className='row'>
            <div className='col-lg-6'>
              <h4 className='chart-title'>{page.home.statistics.firstTitle}</h4>
              <div className="chart-box">
                <div className="pie-chart" id="pieChart1">
                  <FirstChart {...chartData} lang={lang} />
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <h4 className='chart-title'>{page.home.statistics.secondTitle}</h4>
              <div className="chart-box">

                <div className="pie-chart" id="pieChart2">
                  <SecondChart {...chartData2} lang={lang} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
