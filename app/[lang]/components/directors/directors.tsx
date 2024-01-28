import { Locale } from "@/i18n.config";
import Slider from "./slider";
import { getDictionary } from "@/lib/dictionary";


export default async function Directors({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);
  
  return (
    <section className="section-style directors-section w-bg  w-mr mb-0" id="directorsSection" style={{ backgroundImage: `url(${'/img/Mask-Director.png'})` }}>
      <div className=" directors-area">
        <div className="container">
          <h1 className="main-title more-mb">
            {page.home.directors.mainTitle}
          </h1>
          <Slider directorsData={page.home.directors.directorsData}/>
        </div>
      </div>
    </section>
  );
};

