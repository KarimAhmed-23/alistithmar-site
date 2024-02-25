import { Locale } from "@/i18n.config";
import Slider from "./slider";
import { getDictionary } from "@/lib/dictionary";
import DirectorBox from "./director-box";


export default async function Directors({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  
  return (
    <section className="section-style directors-section w-bg  w-mr mb-0" id="directorsSection" style={{ backgroundImage: `url(${'/img/Mask-Director.png'})` }}>
      <div className=" directors-area">
        <div className="container">
          <h1 className="main-title more-mb">
            {page.home.directors.mainTitle}
          </h1>
          {/* <Slider directorsData={page.home.directors.directorsData}/> */}
          <div className="row row-cols-lg-3 row-cols-md-2">

            {
              page.home.directors.directorsData.map((el,idx) => (
                <div className="box-wrap" key={idx}>
                  <DirectorBox director={el}  />
                </div>
              ) )
            }

          </div>
          
        </div>
      </div>
    </section>
  );
};

