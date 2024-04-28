import Image from "next/image"
import styles from "./ImgCards.module.css"
import { useWindowSize } from "@uidotdev/usehooks";

const CardGallary = ({awards})=>{
    const size = useWindowSize();
    return(
        <>
        <h2 className={styles.heading} >Achievements & Accolades: Celebrating Director Neelesh Kumar Gupta&apos;s Journey</h2>
        <div className="body-wrapper justify-between">
        {
            awards.map((award,i)=>(
                <div key={i} className={`${styles.card} body-wrapper column`}>
                    <div className={styles.imgWrapper}>

                    {size.width<656 ? <Image objectFit="cover" width={300} height={"100%"} style={{borderRadius:"10px"}} src={award} alt={"award"} />:<Image objectFit="cover" width={600} height={300} style={{borderRadius:"10px"}} src={award} alt={"award"} />}
                    </div>
                    
                   
                </div>
            ))
        }
      </div>
      </>
    )
}

export default CardGallary