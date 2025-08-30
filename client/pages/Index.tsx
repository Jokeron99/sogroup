import HeroLuxury from "../components/sections/HeroLuxury";
import Services from "../components/sections/Services";
import CaseStudies from "../components/sections/CaseStudies";
import GalleryLuxury from "../components/sections/GalleryLuxury";
import Materials from "../components/sections/Materials";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import StatsLuxury from "../components/sections/StatsLuxury";
import CtaLuxury from "../components/sections/CtaLuxury";

export default function Index() {
  return (
    <div className="[--section-gap:5rem]">
      <HeroLuxury />
      <Services />
      <CaseStudies />
      <GalleryLuxury />
      <Materials />
      <StatsLuxury />
      <Process />
      <Testimonials />
      <CtaLuxury />
      <div className="h-[--section-gap]"></div>
    </div>
  );
}
