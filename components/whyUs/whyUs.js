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
             <Image className={styles.img} src={feature} width={0}
            height={0}
            sizes="100vw"
            style={{margin:"20px 0", width: '100%', height: 'auto' }} alt="features"/>
            </div> 
        </div>
    )
}

export default WhyUs;