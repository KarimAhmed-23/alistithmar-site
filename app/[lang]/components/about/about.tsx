import React from 'react';
import Image from 'next/image';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';


export default async function About({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);

  return (
    <>
      <section className="section-style about-section w-bg" id="aboutSection">
        <div className="about-area">
          <div className="container">
            <div className="brief-box">
              <h1 className="main-title">{page.home.about.maintitle}</h1>
              <p className="about-text">{page.home.about.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section-style about-section w-mr mb-0"
        id="aboutSection2">
        <div className="about-area">
          <div className="container">
            <div className="statistics-box">
              <div className="row gx-4">
                <div className="col-lg-4 about-col mb-4 pb-2 mb-lg-0 pb-lg-0">
                  <div className="box-item full-box">
                    <div className="box-img">
                      <Image
                        src="/img/about-total.png"
                        alt="about-total"
                        width={246}
                        height={59}
                        className="img-fluid"
                      />
                    </div>
                    <div className="box-texts">
                      <span className="sub-title">
                        {page.home.about.subtitle}
                      </span>
                      <h4 className="title">{page.home.about.title}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 about-col">
                  <div className="boxes-row">
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="box-item">
                          <div className="box-icon">
                            <svg
                              width="56"
                              height="56"
                              viewBox="0 0 56 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M48.1916 45.3202V11.7007L21.6568 6V45.3202H19.7684V15.9884L7.80842 19.0093V45.3202H5V48H51V45.3202H48.1916ZM11.7789 23.3944H15.9432V27.5847H11.7789V23.3944ZM11.7789 30.6543H15.9432V34.8445H11.7789V30.6543ZM11.7789 37.8654H15.9432V42.1044H11.7789V37.8654ZM40.0568 16.0858H44.2211V20.2761H40.0568V16.0858ZM40.0568 23.3457H44.2211V27.536H40.0568V23.3457ZM40.0568 30.6056H44.2211V34.7958H40.0568V30.6056ZM40.0568 37.8654H44.2211V42.0557H40.0568V37.8654ZM32.8421 16.0858H37.0063V20.2761H32.8421V16.0858ZM32.8421 23.3457H37.0063V27.536H32.8421V23.3457ZM32.8421 30.6056H37.0063V34.7958H32.8421V30.6056ZM25.6274 16.0858H29.7916V20.2761H25.6274V16.0858ZM25.6274 23.3457H29.7916V27.536H25.6274V23.3457ZM25.6274 30.6056H29.7916V34.7958H25.6274V30.6056ZM25.6274 37.8654H29.7916V42.0557H25.6274V37.8654ZM32.8421 37.8654H37.0063V45.3202H32.8421V37.8654Z" />
                            </svg>
                          </div>
                          <div className="box-texts">
                            <span className="sub-title">
                              {page.home.about.subtitle}
                            </span>
                            <h4 className="title">
                              {page.home.about.boxSubTitle2}
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box-item">
                          <div className="box-icon">
                            <svg
                              width="56"
                              height="56"
                              viewBox="0 0 56 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M48.1916 45.3202V11.7007L21.6568 6V45.3202H19.7684V15.9884L7.80842 19.0093V45.3202H5V48H51V45.3202H48.1916ZM11.7789 23.3944H15.9432V27.5847H11.7789V23.3944ZM11.7789 30.6543H15.9432V34.8445H11.7789V30.6543ZM11.7789 37.8654H15.9432V42.1044H11.7789V37.8654ZM40.0568 16.0858H44.2211V20.2761H40.0568V16.0858ZM40.0568 23.3457H44.2211V27.536H40.0568V23.3457ZM40.0568 30.6056H44.2211V34.7958H40.0568V30.6056ZM40.0568 37.8654H44.2211V42.0557H40.0568V37.8654ZM32.8421 16.0858H37.0063V20.2761H32.8421V16.0858ZM32.8421 23.3457H37.0063V27.536H32.8421V23.3457ZM32.8421 30.6056H37.0063V34.7958H32.8421V30.6056ZM25.6274 16.0858H29.7916V20.2761H25.6274V16.0858ZM25.6274 23.3457H29.7916V27.536H25.6274V23.3457ZM25.6274 30.6056H29.7916V34.7958H25.6274V30.6056ZM25.6274 37.8654H29.7916V42.0557H25.6274V37.8654ZM32.8421 37.8654H37.0063V45.3202H32.8421V37.8654Z" />
                            </svg>
                          </div>
                          <div className="box-texts">
                            <span className="sub-title">
                              {page.home.about.percentage}
                            </span>
                            <h4 className="title">
                              {page.home.about.percentageNumber}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="box-item">
                          <div className="box-icon">
                            <svg
                              width="56"
                              height="56"
                              viewBox="0 0 56 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.6353 9.20842H27.0233V4.47412H28.5295V9.20842H32.3656V21.5365L29.4267 22.6097V45.6078H28.2479V15.734H23.6353V9.20842ZM36.0421 17.8197V20.1089L39.1289 19.0669L39.7565 18.8375V18.8546V45.6079H47.7918V17.8197H46.8942V15.1669H45.915V13.6979H42.3882V15.1669H40.7357V17.8197H36.0421ZM30.3694 45.6078H38.8131V20.1852L30.3694 23.269V45.6078ZM17.2378 16.6769H15.5551V19.8965H17.3646V37.9762H19.0231H19.0236V45.6077H27.3044V16.6769H22.6923H20.5806V15.1461H17.2378V16.6769ZM8.35816 38.9187H10.0187V20.8394H14.6127H16.4222V38.9187H18.0812V45.6077H8.35816V38.9187ZM7.41542 46.5507H5.48831L4.00073 49.5258H52L50.5124 46.5507H48.7342H39.7559H38.813H30.3693H29.4263H28.2475H27.3046H19.0234H18.0814H7.41542Z"
                              />
                            </svg>
                          </div>
                          <div className="box-texts">
                            <span className="sub-title">
                              {page.home.about.cityNumers}
                            </span>
                            <h4 className="title">{page.home.about.cityNum}</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="box-item">
                          <div className="box-icon">
                            <svg
                              width="56"
                              height="56"
                              viewBox="0 0 56 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 51V5H51V51H5ZM48.4444 7.55556H7.55556V48.4444H48.4444V7.55556ZM43.3333 20.3333H12.6667V12.6667H43.3333V20.3333ZM20.3333 43.3333H12.6667V25.4444H20.3333V43.3333ZM43.3333 43.3333H25.4444V25.4444H43.3333V43.3333Z"
                              />
                            </svg>
                          </div>
                          <div className="box-texts">
                            <span className="sub-title">
                              {page.home.about.sectorsNumbers}
                            </span>
                            <h4 className="title">
                              {page.home.about.sectorsNumber}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row gx-4">
                      <div className="col-12">
                        <div className="box-item">
                          <div className="box-icon">
                            <svg
                              width="56"
                              height="56"
                              viewBox="0 0 56 56"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.726 23.834H6V46.3428H7.726V23.834Z" />
                              <path d="M10.0993 23.834H8.37329V46.3428H10.0993V23.834Z" />
                              <path d="M12.4714 23.834H10.7454V46.3428H12.4714V23.834Z" />
                              <path d="M14.8447 21.8354H13.1187V46.3429H14.8447V21.8354Z" />
                              <path d="M17.2178 19.2129H15.4918V46.3427H17.2178V19.2129Z" />
                              <path d="M19.5911 21.8354H17.8651V46.3429H19.5911V21.8354Z" />
                              <path d="M21.9644 23.834H20.2384V46.3428H21.9644V23.834Z" />
                              <path d="M24.3376 25.7073H22.6116V46.3428H24.3376V25.7073Z" />
                              <path d="M26.7104 27.0186H24.9844V46.3429H26.7104V27.0186Z" />
                              <path d="M29.0835 28.5806H27.3575V46.3428H29.0835V28.5806Z" />
                              <path d="M31.4568 31.5781H29.7308V46.3429H31.4568V31.5781Z" />
                              <path d="M33.8301 31.5781H32.1041V46.3429H33.8301V31.5781Z" />
                              <path d="M36.2033 28.5806H34.4773V46.3428H36.2033V28.5806Z" />
                              <path d="M38.5766 27.0186H36.8506V46.3429H38.5766V27.0186Z" />
                              <path d="M40.9499 28.5806H39.2239V46.3428H40.9499V28.5806Z" />
                              <path d="M43.3219 23.0842H41.5959V46.3427H43.3219V23.0842Z" />
                              <path d="M45.6952 17.9639H43.9692V46.3428H45.6952V17.9639Z" />
                              <path d="M48.0684 14.5908H46.3424V46.3423H48.0684V14.5908Z" />
                              <path d="M44.216 6.02805L47.5081 9.31896L32.5902 25.4197H30.1549L16.3072 14.0085L11.2586 18.9247H6.28772V20.6507H11.9594L16.4038 16.3242L29.5346 27.1457H33.3439L48.7283 10.541L51.9732 13.7847L54.0007 4L44.216 6.02805Z" />
                            </svg>
                          </div>
                          <div className="box-texts">
                            <span className="sub-title">
                              {page.home.about.profitPolicy}
                            </span>
                            <h4 className="title">
                              {page.home.about.prfitRules}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
