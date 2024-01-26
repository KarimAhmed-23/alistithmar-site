import { Locale } from "@/i18n.config";
import Header from "./components/header/header";
import About from "./components/about/about";
import Document from "./components/document/document";
import Statistics from "./components/statistics/statistics";
import Directors from "./components/directors/directors";
import Funds from "./components/funds/funds";
import Contact from "./components/contact/contact";


export default function HomePage({params: { lang }}: {params: { lang: Locale }}) {
  return (
    <main className="page-wrapper">
      <Header lang={lang} />
      <About lang={lang}/>
      <Document lang={lang}/>
      <Statistics lang={lang} />
      <Directors lang={lang} />
      <Funds lang={lang}/>
      <Contact lang={lang}/> 
    </main>
  );
}
