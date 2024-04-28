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
          
            <p className="content">Welcome to Shyam The World of Physics, a leading destination for exceptional physics coaching. Established with a vision to nurture the next generation of physics enthusiasts and achievers, we pride ourselves on our commitment to excellence and student success. Led by Director Neelesh Kumar Gupta, an esteemed educator and mentor, our institute offers a comprehensive curriculum, expert guidance, and a supportive learning environment. Whether you&apos;re preparing for competitive exams or aiming to deepen your understanding of physics, Shyam Institute is dedicated to empowering you to achieve your goals and unlock your full potential in the fascinating world of physics.</p>
           <div className="body-wrapper justify-start">
            <button className="primary-btn blue" onClick={()=>{router.push("/ourCourses")}} style={{marginRight:"10px"}}>View Our Courses</button>
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
