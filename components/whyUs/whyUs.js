import Image from "next/image";
import "./whyUs.module.css"
import styles from "./whyUs.module.css"
import img from "../../public/backgroundImages/blue_bg.png"
import feature from "../../public/gallary/features.png"
import { useWindowSize } from "@uidotdev/usehooks";

const WhyUs = ()=>{
    const size = useWindowSize();
    return (
        <div className={`${styles.slide} ${styles.img} bg-class flex-class body-wrapper`}>
            <div className={styles.column}>
                <h2 className={styles.heading}>Features of our Coaching Program</h2>
                <p className="content" style={{color:"#fff"}}>Videos | Mock Tests | Online / Offline Classes</p>
                <button className="primary-btn white">Enroll Now</button>
            </div>
            <div className={styles.column}>
             <div className={styles.marginAuto}>{size.width < 500 ?   <Image className={styles.img} src={feature} alt="features" width={400} height={"100%"}/>:   <Image className={styles.img} src={feature} alt="features" width={500} height={"100%"}/>}</div>
            </div> 
        </div>
    )
}

export default WhyUs;