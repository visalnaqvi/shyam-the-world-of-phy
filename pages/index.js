import ImageCard from "@/components/cards/imageCard/imageCard"
import services from "../data/services.js"
import features from "../data/features.js"
// import heroVideo from "../public/gallary/hero.mp4"
// import heroVideo2 from "../public/gallary/hero2.mp4"
import testi from "../data/testimonials.js"
import longBanner from "../public/backgroundImages/long_banner.png"
import SingleImage from "../components/carousel/singleImage.js"
import background from "../public/sliders/homePageSlider/desktop/slider_1.png"
import background_mb from "../public/sliders/homePageSlider/mobile/slider_1_mb.png"
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head.js"
import Image from "next/image.js"


import { useRouter } from "next/navigation.js"
import VideoHero from "@/components/videoHero/videoHero.js"
import Testimonials from "@/components/testimonials/testimonials.js"
import WhyUs from "@/components/whyUs/whyUs.js"
import VideoBox from "@/components/videoBox/videoBox.js"
export default function Home() {

const size = useWindowSize();
const router = useRouter();


  return (
   
    <div>
       <Head>
      <title>Shyam The World of Physics | Home</title>
    </Head>
    
        <SingleImage url={[background , background_mb]} /> 
      
        <div className="margin">
          <div className="body-wrapper justify-between">
            <h2 className="subHeading">Our foundation</h2>
            <a className="contact-button" href="tel:+917314020339"><button className="primary-btn blue">Contact Us On: +917314020339</button></a>
          </div>
          
            <p className="content">Welcome to Shyam The World of Physics, a premier destination for comprehensive coaching in NEET, JEE and other exams. With a mission to nurture the next generation of science enthusiasts and achievers, we offer expert guidance across all subjects. Led by Director Neelesh Kumar Gupta, our institute is committed to empowering students to excel in competitive exams and beyond.</p>
           <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/ourCourses")}} style={{marginRight:"10px"}}>View Our Courses</button>
            </div>
            <Image src={longBanner}
            width={0}
            height={0}
            sizes="100vw"
            style={{margin:"20px 0", width: '100%', height: 'auto' }}
              alt="some"/>
         <VideoHero />
          <h2 className="boldHeading center">Courses That We Offer</h2>
          <div className="body-wrapper">
              {
                services.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>

         <Testimonials testi={testi} />
          <h2 className="subHeading center">Why to choose Us?</h2>
          <p className="content center">At Shyam Institute, we stand out as the premier destination for physics coaching for several reasons. Firstly, our esteemed faculty, led by Director Neelesh Kumar Gupta, brings a wealth of knowledge and experience, ensuring unparalleled guidance for every student. Secondly, our comprehensive curriculum is meticulously crafted to cover all facets of competitive physics exams, equipping students with the skills and confidence needed to excel. Lastly, our supportive learning environment fosters growth and encourages students to reach their full potential. With personalized attention, regular assessments, and interactive sessions, we pave the way for students to achieve their academic goals and beyond.</p>
        </div>
            <WhyUs />
           <VideoBox />
        <div className="body-wrapper">
              {
                features.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>
        
        <br></br>
    </div>
  )
}
