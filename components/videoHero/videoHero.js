import styles from "./videoHero.module.css"
import { FaPhoneAlt } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { useWindowSize } from "@uidotdev/usehooks";

import heroImg from "../../public/gallary/video_hero.jpeg"
import one from "../../public/gallary/1.jpeg"
import two from "../../public/gallary/2.jpeg"
import three from "../../public/gallary/3.jpeg"
import four from "../../public/gallary/4.jpeg"
import Image from "next/image"
import CardGallary from "../gallary/cardGallary/cardGallary";
const VideoHero = ()=>{
    const router = useRouter()
    const size = useWindowSize();
    const awards = [{
        img:one,
        text:"University Gold Medallist (Awarded By Governer MP)"
    },
{
    img:two,
    text:"Best Student Awarded in  MSc Physics"
},
{
    img:three,
    text:"President of Physics Department Holkar Science College"
},
{
    img:four,
    text:"Three Year College Topper in BSc ( Career College Bhopal)"
}]
    return (
        <div  className={styles.wrapper}>
        <div className={`body-wrapper`}>
        <div className={styles.column}>
        <h2 className="subHeading" style={
            {marginTop:0}
        }>Meet Our Director: Guiding Your Path to Success!</h2>
        <p className="content">As an inspiring figure, Director Neelesh Kumar Gupta embodies excellence and dedication. With a rich academic background including being a University Gold Medallist and Best Student in MSc Physics, he brings unparalleled expertise to his role. Renowned for his mentorship, he guides students to success, supported by his own achievements and accolades.</p>
        <a href="tel:+9107314020339"><div className={`body-wrapper justify-start ${styles.phoneWrapper}`}>
            <div className={`${styles.icon}`}>
                <FaPhoneAlt />
            </div>
            <p className={styles.phone}>Connect with us Now</p>
        </div></a>
        <div className="body-wrapper justify-start">
            <button style={{marginTop:"20px",padding:"20px" , fontSize:"20px"}} className="primary-btn blue" onClick={()=>{router.push("/recentProjects")}}>Explore Recent Projects</button>
            </div>
        </div>
        <div onClick={()=>{
            window.open("https://stargateeducation.com", '_blank');
        }} className={styles.column}>
            {size.width && size.width >500 ?<Image src={heroImg} style={{objectFit:"contain" , borderRadius:"20px" , boxShadow:"0px 10px 20px #00000040"}} width={"400"} alt="something" />:
            <Image src={heroImg} style={{objectFit:"contain" , borderRadius:"10px" , boxShadow:"0px 10px 20px #00000040"}} width={"300"} alt="something" />}
            <p className="subHeading center" style={{margin:"0"}}>Director Neelesh Kumar Gupta</p>
      </div>

      </div>
      <CardGallary awards={awards} />
      </div>
    )
}

export default VideoHero;