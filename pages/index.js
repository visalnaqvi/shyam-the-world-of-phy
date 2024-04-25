import ImageCard from "@/components/cards/imageCard/imageCard"
import CarouselComp from "@/components/carousel/carousel"
import services from "../data/services.js"
import features from "../data/features.js"
// import heroVideo from "../public/gallary/hero.mp4"
// import heroVideo2 from "../public/gallary/hero2.mp4"
import testi from "../data/testimonials.js"
import Map from "../components/map/map.js"
import longBanner from "../public/backgroundImages/long_banner.png"
import SingleImage from "../components/carousel/singleImage.js"
import background from "../public/sliders/homePageSlider/desktop/slider_1.png"
import background_mb from "../public/sliders/homePageSlider/mobile/slider_1_mb.png"
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "next/head.js"
import Image from "next/image.js"


import TestimonialCard from "@/components/cards/testimonialCard/testimonialCard.js"
import { useRouter } from "next/navigation.js"
import VideoHero from "@/components/videoHero/videoHero.js"
import Gallary from "@/components/gallary/gallary.js"
import Testimonials from "@/components/testimonials/testimonials.js"
import WhyUs from "@/components/whyUs/whyUs.js"
export default function Home() {

const size = useWindowSize();
const router = useRouter();


  return (
   
    <div>
       <Head>
      <title>Webiste and Web Apps Service in Noida</title>
    </Head>
    
        <SingleImage url={[background , background_mb]} /> 
      
        <div className="margin">
          <div className="body-wrapper justify-between">
            <h2 className="subHeading">Our foundation</h2>
            <a className="contact-button" href="tel:+919993005825"><button className="primary-btn blue">Contact Us On: +919993005825</button></a>
          </div>
          
            <p className="content">At InfiniteWeb Solutions, we believe in the power of limitless creativity and innovation to shape the digital landscape. Our foundation is built on a commitment to excellence, integrity, and client satisfaction. We are dedicated to crafting immersive web experiences that transcend expectations, empowering businesses to thrive in the digital realm. With a team of passionate experts, we harness the latest technologies and design trends to unlock infinite possibilities for our clients. From concept to execution, we are your partners in success, providing tailored solutions that elevate your online presence and drive measurable results. Welcome to a world of endless opportunities with InfiniteWeb Solutions.</p>
           <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/recentProjects")}} style={{marginRight:"10px"}}>Explore Recent Projects</button>
            <button className="primary-btn blue" onClick={()=>{router.push("/login")}} style={{marginRight:"10px"}}>Request a Callback</button>
            </div>
            <div style={{position:"relative", width:"100%", height:`${size.width<800?"200px":"600px"}`}}>
            <Image onClick={()=>{router.push("/login")}} src={longBanner} fill={true} style={{objectFit:"contain"}} alt="some"/>
          </div>
         <VideoHero />
          <h2 className="boldHeading center">Courses That We Offer</h2>
          <div className="body-wrapper">
              {
                services.map((d,i)=>(
                  <ImageCard key={i} data={d} />
                ))
              }
          </div>
          
          {/* <h2 className="subHeading center">Recent Interior Projects</h2>
          <Gallary images={images_1}></Gallary>
          <div className="body-wrapper">
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/interiorProjects")}}>Explore More Interior Projects</button>
              </div>
          <h2 className="subHeading center">Recent Exterior Projects</h2>
          <Gallary images={images_2}></Gallary> */}
          {/* <div className="body-wrapper">
          <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/exteriorProjects")}}>Explore More Exterior Projects</button>
              </div> */}

         <Testimonials testi={testi} />
          <h2 className="subHeading center">Why to choose Us?</h2>
          <p className="content center">At Shyam Institute, we stand out as the premier destination for physics coaching for several reasons. Firstly, our esteemed faculty, led by Director Neelesh Kumar Gupta, brings a wealth of knowledge and experience, ensuring unparalleled guidance for every student. Secondly, our comprehensive curriculum is meticulously crafted to cover all facets of competitive physics exams, equipping students with the skills and confidence needed to excel. Lastly, our supportive learning environment fosters growth and encourages students to reach their full potential. With personalized attention, regular assessments, and interactive sessions, we pave the way for students to achieve their academic goals and beyond.</p>
        </div>
            <WhyUs />
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
