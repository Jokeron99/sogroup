import HeroLuxury from "../components/sections/HeroLuxury";
import Services from "../components/sections/Services";
import CaseStudies from "../components/sections/CaseStudies";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CtaLuxury from "../components/sections/CtaLuxury";

export default function Index() {
  return (
    <div className="[--section-gap:5rem]">
      <HeroLuxury />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CtaLuxury />
      <div className="h-[--section-gap]"></div>
    </div>
  );
}
