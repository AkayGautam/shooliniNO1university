import Header from "../components/Header";
import SliderDemo from "../components/SliderDemo";
import IconBox from "../components/IconBox";
import Schema from "@/components/Schema";
import Ranking from "../components/Ranking";
import Companies from "../components/Companies";
import ShooliniAdvantage from "../components/ShooliniAdvantage";
import Programmes from "../LayoutPages/School-Programe/Programmes";
import Testimonials from "../components/Testimonials";
import ResearchStories from "../components/ResearchStories";
import GalleryView from "../components/GalleryView";
import ShooliniImpact from "../components/ShooliniImpact";
import ScrollButton from "../components/common/ScrollButton";
import Footer from "../components/Footer";

export const server = process.env.BASE_URL;

export default function homepage({
  programs,
  testimonials, 
  sitlinkSchema,
}) {
  return (
    <>
      {/* <Schema navigation={navigationSchema} siteLink={sitlinkSchema} /> */}

      <div className="header-homepage"> <Header />
      </div>

      <SliderDemo />

      <IconBox />

 <Ranking />
 <div className="for-desktop"> 
     <Companies />
      <ShooliniAdvantage />
     </div>
 <Programmes programs={programs} />


 <div className="for-mobile"> 
     <Companies />
      <ShooliniAdvantage />
     </div>
     
    
     <ResearchStories />
      {/* <GalleryView /> */}



     

      <Testimonials testimonials={testimonials} />


      <ShooliniImpact />

      <ScrollButton />

      <Footer />

    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://shooliniuniversity.com/api/home`);
  const data = await res.json();

  return {
    props: {
      navigationSchema: data?.navigation,
      sitlinkSchema: data?.siteLink,
      programs: data.programs || [],
      testimonials: data.testimonials,
    },
    revalidate: 300,
  };
}
